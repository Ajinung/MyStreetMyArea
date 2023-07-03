import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import passport from "passport";
import cookieSession from "cookie-session";
import PassPort from "../src/utils/passport"

PassPort

export const mainAppConfig = (app: Application) => {
  app.use(express.json()).use(cors()).use(morgan("dev"));

  app.use(
    cookieSession({
      name: "tuto-session",
      keys: ["key1", "key2"],
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/', (req, res) => {
    res.send("<button><a href='/google-auth'>Login With Google</a></button>")
  });

  app.get('/google-auth', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get(
    "/oauth2/redirect/google",
    passport.authenticate("google", {
      successRedirect: "https://eazyhr.vercel.app/",
      failureRedirect: "/login",
    })
  );
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// Initializes passport and passport sessions

// Example protected and unprotected routes
app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
// app.get('/good', isLoggedIn, (req:any, res) =>{
//     res.render("pages/profile",{name:req.user.displayName,pic:req.user.photos[0].value,email:req.user.emails[0].value})
// })

// Auth Routes
app.get('/google-auth', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  }
);

// app.get('/logout', (req:any, res) => {
//     req.session = null;
//     req.logout();
//     res.redirect('/');
// })
};
