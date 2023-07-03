import mongoose from "mongoose";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";



import { asyncHandler } from "../utils/asyncHandler";
import { AppError, HttpCode } from "../utils/appError";
import userModel from "../model/userModel";


export const userSignup = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userName , email , phoneNum , password } =
        req.body;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const user = await userModel.create({
        userName , email , phoneNum , password:hash
      });

      if (!user) {
        next(
          new AppError({
            message: "couldn't create staff account",
            httpCode: HttpCode.BAD_REQUEST,
          })
        );
      }else{
        return res.status(201).json({
          message : "new user created",
          data : user
        })
      }

     
    } catch (error: any) {
      console.log("error", error);

      return res.status(400).json({
        message: "an error occurred while creating user",
        data: error.message,
      });
    }
  }
);

export const userSignin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;

      const staff = await userModel.findOne({ email });

      return res.status(200).json({
        message: "Success , user is logged in",
        data: staff,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: "an error occurred while logging in user",
        data: error.message,
      });
    }
  }
);

//get all sellers
export const getAllUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();

    return res.status(200).json({
      message: "get all users",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get users",
      data: error,
      err: error.message,
    });
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findById(req.params.userId)

    return res.status(200).json({
      message: "gotten one user",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get user",
      data: error,
      err: error.message,
    });
  }
};


