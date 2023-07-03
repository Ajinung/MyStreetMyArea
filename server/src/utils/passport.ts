import passport from "passport"

import passPort from "passport-google-oauth2"

const GoogleStrategy = passPort.Strategy
// const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user:any , done) => {
	done(null , user);
})
passport.deserializeUser(function(user:any, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID:"830797798693-8rjku2kdbsf6a6ds4gi9h2rb7roelseb.apps.googleusercontent.com" ,
	clientSecret: "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",
	  callbackURL:"/oauth2/redirect/google",
	scope: [ 'profile' ],
	  passReqToCallback:true
	},
	function(request, accessToken, refreshToken, profile, done) {
	  console.log("this is profile" , profile)
	  return done(null, profile);
	}
  ));

export default passport