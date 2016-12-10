
const mongoose = require('mongoose')

const Schema = mongoose.Schema

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

  company: {
    type: String,
    trim: true
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
  }

})

// This creates our model from the above schema, using mongoose's model method.
const User = mongoose.model('User', UserSchema)

// finally, we export the module, allowing server.js to hook into it with a require statement.
export default User
