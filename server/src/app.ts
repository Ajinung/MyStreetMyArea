import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";

import { AppError, HttpCode } from "./utils/appError";
import { errorHandler } from "./middleware";
import userRoutes from "./router/userRouter";
import passport from "passport";
import cookieSession from "cookie-session";
import PassPort from "../src/utils/passport"
import productRoutes from "./router/ProductsRoutes";
import imageRouter from "./router/imagesRouter";


PassPort

//creating our application
const appConfig = (app: Application) => {
  
  //middle waresu 
  app.use(express.json()).use(cors()).use(morgan("dev"));

  //social logins

  app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }));
  app.use(passport.initialize());
  app.use(passport.session());
    
  
  app.get('/', (req, res) => {
    res.send("<button><a href='/google-auth'>Login With Google</a></button>")
  });

  app.get('/google-auth' , passport.authenticate('google', { scope:
    [ 'email', 'profile' ]
  }));
  
  console.log("just clicked the button")

  app.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: 'https://eazyhr.vercel.app/',
  failureRedirect: '/login'
}));

  // Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    console.log("another user" , req.user)
      next();
  } else {
      res.sendStatus(401);
  }
}

// // console.log(isLoggedIn)

// console.log("user is logged in")

// app.get('/good', isLoggedIn, (req:any, res) =>{
  
// console.log("user details" , [{name:req.user.displayName,pic:req.user.photos[0].value,email:req.user.emails[0].value}])

//   return res.status(200).json({
//     message : "welcome",
//     data : [{name:req.user.displayName,pic:req.user.photos[0].value,email:req.user.emails[0].value}]
//   })
// })


//   // Auth
 
  
//   // Auth Callback
  // app.get( '/auth/callback',
  //   passport.authenticate( 'google', {
  //     successRedirect: '/auth/callback/success',
  //     failureRedirect: '/auth/callback/failure'
  // }));
  
//   // Success
  // app.get('/https://eazyhr.vercel.app/dashboard?code=4%2F0AbUR2VMT_1MBTwCaOOXKWOVTY5uGQmnaSISqlHxhiYK-2XnPiC5tLdWefhZ79IJMVUVAgA&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=consent' , (req:any , res:Response) => {
  //   if(!req.user){
  //     console.log("this is user",req.user) 
      
  //     res.redirect('/auth/callback/failure');
  //   }else{
  //     res.send("Welcome " + req?.user?.email!);
  //   }
    
    
  // });
  
//   // failure
  // app.get('/auth/callback/failure' , (req , res) => {
  //   res.send("Error");
  // })


  
  app.use("/api/auth", userRoutes);
  app.use("/api/products" , productRoutes)
  app.use("/api/images" , imageRouter)

  //checking all routes
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(
      new AppError({
        message: `this route does not exist ${req.originalUrl}`,
        httpCode: HttpCode.NOT_FOUND,
      })
    );
  });

  //error handler
  app.use(errorHandler);
};

export default appConfig;
