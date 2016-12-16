
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcryptjs')

var UserSchema = new Schema({

  firstName: {
    type: String,
    trim: true,
    required: 'String is Required'
  },

  lastName: {
    type: String,
    trim: true,
    required: 'String is Required'
  },

  email: {
    type: String,
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address'],
    index: { unique: true }
  },

  password: {
    type: String,
    required: 'Password is required'
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }

  },

  {
    timestamps: true
  }
)

UserSchema.pre('save', function(next) { 
  var user = this,
        SALT_FACTOR = 5

  if (!user.isModified('password')) return next()

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err)

  console.log('MY PASSWORD ' + user.password)

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

// UserSchema.methods.comparePassword = function(attemptedPassword, existingPassword, callback) {
//   bcrypt.compare(attemptedPassword, existingPassword, function(err, isMatch) {
//     console.log("attempted: " + attemptedPassword)
//     console.log("attempte2: " + existingPassword)
//     callback(isMatch);
//   })
// }



module.exports = mongoose.model('User', UserSchema)
