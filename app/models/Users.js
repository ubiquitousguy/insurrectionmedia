
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
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
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

UserSchema.methods.comparePassword = function(candidatePassword, cb) {  
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return cb(err) }
    cb(null, isMatch)
  })
}


var User = mongoose.model('User', UserSchema)

module.exports = User
