const Promise = require('bluebird')
const express = require('express')
const User = require('./app/models/Users')

const jwt = require('jsonwebtoken'),
      crypto = require('crypto'),
      config = require('./config/secret')
const compareSec = require('./encryption').compareSec


function generateToken(user) {  
  return jwt.sign(user, config.phrase, {
    expiresIn: 100000 // in seconds
  })
}

function setUserInfo(request) {  
  return {
    _id: request._id,
    firstName: request.firstName,
    lastName: request.lastName,
    email: request.email,
    // role: request.role
  }
}

module.exports = function(server) {
  // const authRoutes = express.Router()  
  server.post('/auth/register', (req, res) => {

    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const password = req.body.password
    const isAdmin = req.body.isAdmin

    if (!email) {
      return res.status(422).send({ error: 'You must enter an email address.'});
    }

    // Return error if full name not provided
    if (!firstName || !lastName) {
      return res.status(422).send({ error: 'You must enter your full name.'});
    }

    // Return error if no password provided
    if (!password) {
      return res.status(422).send({ error: 'You must enter a password.' });
    }    

    User.findOne({ email: email }, function(err, existingUser) {
      if (err) { return next(err) }
      if (existingUser) { 
        return res.status(422).send({ error: 'That email address is already in use.' })
      }
      let user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        isAdmin: isAdmin
      })
      user.save(function(err) {
        if(err) return handleError(err)
        let userInfo = setUserInfo(user)
        res.status(201).json({
          token: 'JWT ' + generateToken(userInfo),
          user: userInfo
        })
      })
    })
  })

server.post('/auth/signin', (req, res) => {

  const email = req.body.email
  const password = req.body.password
  const isAdmin = req.body.isAdmin

  // let user = new User({
  // email: email,
  // password: password,
  // isAdmin: isAdmin
  // })

  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err) }
    if (!existingUser) {
      return res.status(422).send({ error: 'User Not Found' })
    }
    if (existingUser) {
      compareSec(password, existingUser.password, function(matchy) {
        console.log(matchy)
      })
    }
  })
})

  server.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })
  server.get('/api/user_data', (req, res) => {
    if (!req.user) {
      res.json({})
    }
    else {
      res.json({
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.user.email
      })
    }
  })
}

// Roles

// Role authorization check
// exports.roleAuthorization = function(role) {  

//   return function(req, res, next) {
//     const user = req.user;

//     User.findById(user._id, function(err, foundUser) {
//       if (err) {
//         res.status(422).json({ error: 'No user was found.' });
//         return next(err);
//       }

//       // If user is found, check role.
//       if (foundUser.role == role) {
//         return next();
//       }

//       res.status(401).json({ error: 'You are not authorized to view this content.' });
//       return next('Unauthorized');
//     })
//   }
// }