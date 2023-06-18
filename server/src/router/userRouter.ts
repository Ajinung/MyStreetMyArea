import { Router } from "express";

import { getAllUser, getOneUser, userSignin, userSignup } from "../controller/usercontroller";
import { loginValidation, registerValidation } from "../middleware/validator/userValidation/userValidation";


const userRoutes = Router();

userRoutes.post("/login", loginValidation ,  userSignin);
userRoutes.post("/register", registerValidation, userSignup);
userRoutes.get("/", getAllUser);
userRoutes.get("/:staffId", getOneUser);



export default userRoutes;

