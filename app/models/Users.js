
var mongoose = require('mongoose')
var Schema = mongoose.Schema

const bcrypt = require('bcrypt')

const UserSchema = new Schema({

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

  // resetPasswordToken: { type: String },
  // resetPasswordExpires: { type: Date }

  }

  // {
  //   timestamps: true
  // }
)

UserSchema.pre('save', function(next) {  
  const user = this,
        SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

  console.log('MY PASSWORD ' + user.password)

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next()
    })
  })
})

// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if(err) { return cb(err) }
//     cb(null, isMatch)
//   })
// }
// This creates our model from the above schema, using mongoose's model method.
const User = mongoose.model('User', UserSchema)

// finally, we export the module, allowing server.js to hook into it with a require statement.
// export default User
// export default mongoose.model('User', new User());
module.exports = User
