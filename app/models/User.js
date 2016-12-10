
// first, we hook mongoose into the model with a require
var mongoose = require('mongoose')
// then, we save the mongoose.Schema class as simply "Schema"
var Schema = mongoose.Schema
// with our new Schema class, we instantiate an ExampleSchema object.
// This is where we decide how our data must look before we accept it in the server
// and how to format it in mongoDB
var User = new Schema({
  // string must be a string. We "trim" it to remove any trailing white space.
  // Notice that it is required, as well. It must be entered
  // or else mongoose will throw an error.

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
var User = mongoose.model('User', UserSchema)

// finally, we export the module, allowing server.js to hook into it with a require statement.
export default User
