var bcrypt = require('bcryptjs')

exports.secrify = function (pw, cb) {
  var pw = pw,
        SALT_FACTOR = 5

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err)

    bcrypt.hash(pw, salt, function(err, hash) {
      if (err) return err
      pw = hash
      cb(pw)
    })
  })
}

exports.compareSec = function (attemptedPassword, storedPassword, cb) {
  bcrypt.compare(attemptedPassword, storedPassword, function(err, isMatch) {
    cb(isMatch)
  })
}

