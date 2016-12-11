// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//   function(username, password,done){
//     Users.findOne({ username : username},function(err,user){
//         if(err) { return done(err); }
//         if(!user){
//             return done(null, false, { message: 'Incorrect username.' });
//         }

//         hash( password, user.salt, function (err, hash) {
//             if (err) { return done(err); }
//             if (hash == user.hash) return done(null, user);
//             done(null, false, { message: 'Incorrect password.' });
//         })
//     })
// }))
