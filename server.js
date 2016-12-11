require('babel-register')
// server started with: npm start
const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const _ = require('lodash')
const fs = require('fs')
const port = 3000
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./app/app.js').default
const server = express()
const cookieParser = require('cookieParser')
// class components
const bodyParser = require('body-parser')
const logger = require('morgan')
// Passport Setup
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
// db setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/insurrection')
const db = mongoose.connection

db.on('error', function (err) {
  console.log('Mongoose Error: ', err)
})

db.once('open', function () {
  console.log('Mongoose connection successful.')
})

server.use('/public', express.static('./public'))
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.text())
server.use(bodyParser.json({type: 'application/vnd.api+json'}))
// server.use(express.cookieParser());

// server.use(express.bodyParser());
// server.use(express.session({ secret: 'SECRET' }));
server.use(passport.initialize());
// server.use(passport.session());
// server side rendering
server.use((req, res) => {
  const context = ReactRouter.createServerRenderContext()
  let body = ReactDOMServer.renderToString(
    React.createElement(ServerRouter, {location: req.url, context: context},
      React.createElement(App)
    )
  )
  res.write(template({body: body}))
  res.end()
})

console.log('listening on ' + port)
server.listen(port)
