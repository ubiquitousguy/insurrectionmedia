const jwt = require('jsonwebtoken'),
      crypto = require('crypto'),
      User = require('../models/user')

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 100000
  })
}

function setUserInfo(request) {
  return {
    _id: request._id,
    firstName: request.profile.firstName,
    lastName: request.profile.lastName,
    email: request.email,
    isAdmin: request.isAdmin
  }
}

exports.login = function(req, res, next) {
  let userInfo = setUserInfo(req.user)

  res.status(200).json({
    token: 'JWT ' + generateToken(userInfo),
    user: userInfo
  })
}

exports.register = function (req, res, next) {

  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const password = req.body.password
  const isAdmin = req.body.isAdmin

  if (!email) {
    return res.status(422).send({ error: 'You must enter an email address.' })
  }

  if (!firstName) {
    return res.status(422).send({ error: 'You must enter a first name.' })
  }

  if (!lastName) {
    return res.status(422).send({ error: 'You must enter a last name.' })
  }

  if (!password) {
    return res.status(422).send({ error: 'You must enter a password.' })
  }

  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err) }
    if (existingUser) {
      return res.status(422).send({ error: 'That email address is already  in use.' })
    }
    let user = new User({
      email: email,
      password: password,
      profile: { firstName: firstName, lastName: lastName, isAdmin: isAdmin }
    })

    user.save(function(err, user) {
      if (err) { return next(err) }

      let userInfo = setUserInfo(user)

      res.status(201).json({
        token: 'JWT ' + generateToken(userInfo),
        user: userInfo
      })
    })
  })
}

// authorization Middleware

// Role authorization check
exports.roleAuthorization = function(role) {
  return function(req, res, next) {
    const user = req.user

    User.findById(user._id, function(err, foundUser) {
      if (err) {
        res.status(422).json({ error: 'No user was found.' })
        return next(err)
      }
// not sure about this 
      if (foundUser.isAdmin == true) {
        return next()
      }

      res.status(401).json({ error: 'You are not authorized to view this content.' })
      return next('Unauthorized')
    })
  }
}

