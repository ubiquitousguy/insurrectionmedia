const AuthenticationController = require('/app/controllers/authentication_controller'),
      express = require('express'),
      passportService = require('./app/utils/passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', { session: false })

const REQUIRE_ADMIN = 'Admin',
      REQUIRE_OWNER = 'Client'

module.exports = function(server) {
  const authRoutes = express.Router()   
  authRoutes.post('/register', AuthenticationController.register)
  authRoutes.post('/login', requireLogin, AuthenticationController.login)
}