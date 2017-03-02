var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


facebookAuth = sails.config.auth['facebook'];

passport.use(new FacebookStrategy({

    clientID: facebookAuth['clientID'],
    clientSecret: facebookAuth['clientSecret'],
    callbackURL: facebookAuth['callbackURL']

  },
  function(accessToken, refreshToken, profile, done) {

   //TODO
  }
));


googleAuth = sails.config.auth['google'];

/**
 *  Use the GoogleStrategy within Passport.
 *  Strategies in Passport require a `verify` function, which accept
 *  credentials (in this case, an accessToken, refreshToken, and Google
 *  profile), and invoke a callback with a user object.
 **/

passport.use(new GoogleStrategy({

    clientID: googleAuth['clientID'],
    clientSecret: googleAuth['clientSecret'],
    callbackURL: googleAuth['callbackURL']

  },
  function(accessToken, refreshToken, profile, done) {

    var error = null;

   //TODO

  }
));
