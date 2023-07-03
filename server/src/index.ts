console.log("--------------------------------");

import express, { Application, Request, Response } from "express";
import appConfig from "./app";
// import { mainAppConfig } from "./mainApp";

import envVariables from "./config/environmentVariables";
import dbConfig from "./config/db";

const app: Application = express();
appConfig(app);
// mainAppConfig(app)
dbConfig();




app.listen(envVariables.PORT, () => {
  console.log(`server is up on port ${envVariables.PORT}`);
});


console.log("-------------------------------- : ");
console.log("-------------------------------- : ");