import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";

import { AppError, HttpCode } from "./utils/appError";
import { errorHandler } from "./middleware";
import userRoutes from "./router/userRouter";






//creating our application
const appConfig = (app: Application) => {
  
  //middle wares
  app.use(express.json()).use(cors()).use(morgan("dev"));

  //routes (API endpoints)
  
  app.get("/", (req: Request, res: Response) => {
    res.json({ message: "api ready for consumption" });
  });
  
  app.use("/api/auth", userRoutes);

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
