const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const dotenv = require('dotenv').config();
const session = require('express-session');


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    return done(null, profile)
  }
));



function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get('/google', 
    passport.authenticate('google', { scope: ['email', 'profile'] })
)

router.get('/google/callback', 
    passport.authenticate('google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/failure'
    })
)

router.get('/failure', (req, res) => {
    res.send('Something went wrong!')
})

router.get("/protected", isLoggedIn, (req, res) => {
    res.send(`Welcome, ${req.user.displayName}`)
})

router.get('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.status(400).send("something went wrong")
        } else {
          res.send("You've successfully logout!")
        }
      })
    } else {
      res.end()
    }
})

passport.serializeUser(function(user, done) {
  done(null, user)
});

passport.deserializeUser(function(user, done) {
  done(null, user)
});

module.exports = router;