import { Request, Response, NextFunction } from "express";
import cloud from "../config/cloudinary"
import productModel from "../model/client/userProducts";
import { asyncHandler } from "../utils/asyncHandler";
import { AppError, HttpCode } from "../utils/appError";
import userModel from "../model/userModel";
import mongoose from "mongoose";

//getting all products
export const getAllProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await productModel.find();

      if (!products) {
        next(
          new AppError({
            message: "you don't have any products",
            httpCode: HttpCode.BAD_REQUEST,
          })
        );
      } else {
        return res.status(201).json({
          message: "gotten all products",
          data: products,
        });
      }
    } catch (error: any) {
      console.log("error", error);

      return res.status(400).json({
        message: "an error occurred while getting products",
        data: error.message,
      });
    }
  }
);

//single get : getting one product
export const getOneProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await productModel.findById(req.params.productId);

      if (!products) {
        next(
          new AppError({
            message: "couldn't get a product",
            httpCode: HttpCode.BAD_REQUEST,
          })
        );
      } else {
        return res.status(201).json({
          message: "gotten a product",
          data: products,
        });
      }
    } catch (error: any) {
      console.log("error", error);

      return res.status(400).json({
        message: "an error occurred while getting aproduct",
        data: error.message,
        err:error
      });
    }
  }
);

//uploading products

export const uploadProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //getting seller

      const getSeller = await userModel.findById(req.params.userId);

      const {
         productImage, sellerName, location, price, category } = req.body;

      const CloudImg = await cloud.uploader?.upload(req?.file!.path);

      if (getSeller) {
        const products = await productModel.create({
          productImage:CloudImg.secure_url,
          sellerName,
          location,
          price,
          category,
         imgOne : "",
         imgTwo : ""
        
        });

        await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))

        await getSeller.save()

        if (!products) {
          next(
            new AppError({
              message: "couldn't create product",
              httpCode: HttpCode.BAD_REQUEST,
            })
          );
        } else {
          return res.status(201).json({
            message: "new product added",
            data: products,
          });
        }
      } else {
        next(
          new AppError({
            message: "not a registered seller",
            httpCode: HttpCode.NOT_FOUND,
          })
        );
      }
    } catch (error: any) {
      console.log("error", error);

      return res.status(400).json({
        message: "an error occurred while creating  products",
        data: error.message,
      });
    }
  }
);

