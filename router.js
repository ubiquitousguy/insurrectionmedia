const Promise = require('bluebird');
const AuthenticationController = require('./app/controllers/authentication_controller'),
      express = require('express')
const User = require('./app/models/Users')
      // passportService = require('./app/utils/passport'),
      // passport = require('passport')

// const requireAuth = passport.authenticate('jwt', { session: false })
// const requireLogin = passport.authenticate('local', { session: false })
// import { User } from './app/models/Users'
// const REQUIRE_ADMIN = 'Admin',
//       REQUIRE_CLIENT = 'Client'
module.exports = function(server) {
  // const authRoutes = express.Router()  
  server.post('/auth/register', (req, res) => {
    User.find({}, function(err, res) {
      console.log(res);
    })
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const password = req.body.password
    const isAdmin = req.body.isAdmin
    
    let user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      isAdmin: isAdmin
    })

    console.log('The user is: ' + user)

    user.save(function(err) {
      if(err) return handleError(err)
    })
    // User.findOne({ email: email }, function(err, existingUser) {
    //   console.log(err, existingUser,'herehehrhere')
    //   if (existingUser) {
    //   console.log(err, existingUser,'ASDF')
    //     return res.status(422).send({ error: 'That email address is already in use.' })
    //   }
      // return user.save(function(err){
      //   console.log(err);
      // });
    // })
  })
}