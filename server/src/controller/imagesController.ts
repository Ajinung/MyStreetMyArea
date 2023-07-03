import {Request , Response ,NextFunction} from "express"

import imageModel from "../model/client/imageModel"
import cloud from "../config/cloudinary"
import productModel from "../model/client/userProducts";
import { asyncHandler } from "../utils/asyncHandler";
import { AppError, HttpCode } from "../utils/appError";
import userModel from "../model/userModel";
import mongoose from "mongoose";
//post images


//update one
export const uploadProductsImagesOne = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getProduct = await productModel.findById(req.params.productId);
  
        const { imgOne } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getProduct) {
          const products = await productModel.findByIdAndUpdate(getProduct?._id , {imgOne:CloudImg?.secure_url} , {new:true})
  
        //   await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
  
        //   await getSeller.save()
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

  
export const uploadProductsImagesTwo = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getSeller = await productModel.findById(req.params.productId);
  
        const {
            imgTwo,
            
        } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getSeller) {
            const products = await productModel.findByIdAndUpdate(getSeller?._id , {
                imgTwo:CloudImg?.secure_url,
               
              } , {new:true});
      
            //   await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
      
            //   await getSeller.save()
      
  
          await getSeller.save()
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

export const uploadProductsImagesThree = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getSeller = await userModel.findById(req.params.userId);
  
        const { imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix,
            imgSeven,
            imgEight,
            imgNine,
            imgTen, } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getSeller) {
            const products = await imageModel.findByIdAndUpdate(getSeller?._id , {
                imgThree:CloudImg?.secure_url,
               
              } , {new:true});
      
              await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
      
              await getSeller.save()
      
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

export const uploadProductsImagesFour = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getSeller = await userModel.findById(req.params.userId);
  
        const { imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix,
            imgSeven,
            imgEight,
            imgNine,
            imgTen, } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getSeller) {
            const products = await imageModel.findByIdAndUpdate(getSeller?._id , {
                imgFour:CloudImg?.secure_url,
               
              } , {new:true});
      
              await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
      
              await getSeller.save()
      
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

export const uploadProductsImagesFive = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getSeller = await userModel.findById(req.params.userId);
  
        const { imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix,
            imgSeven,
            imgEight,
            imgNine,
            imgTen, } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getSeller) {
            const products = await imageModel.findByIdAndUpdate(getSeller?._id , {
                imgFive:CloudImg?.secure_url,
               
              } , {new:true});
      
              await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
      
              await getSeller.save()
      
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

export const uploadProductsImagesSix = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getSeller = await userModel.findById(req.params.userId);
  
        const { imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix,
            imgSeven,
            imgEight,
            imgNine,
            imgTen, } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getSeller) {
            const products = await imageModel.findByIdAndUpdate(getSeller?._id , {
                imgSix:CloudImg?.secure_url,
               
              } , {new:true});
      
              await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
      
              await getSeller.save()
      
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

export const uploadProductsImagesSeven = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getSeller = await userModel.findById(req.params.userId);
  
        const { imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix,
            imgSeven,
            imgEight,
            imgNine,
            imgTen, } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getSeller) {
            const products = await imageModel.findByIdAndUpdate(getSeller?._id , {
                imgSeven:CloudImg?.secure_url,
               
              } , {new:true});
      
              await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
      
              await getSeller.save()
      
  
          await getSeller.save()
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

export const uploadProductsImagesEight = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getSeller = await userModel.findById(req.params.userId);
  
        const { imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix,
            imgSeven,
            imgEight,
            imgNine,
            imgTen, } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getSeller) {
            const products = await imageModel.findByIdAndUpdate(getSeller?._id , {
                imgEight:CloudImg?.secure_url,
               
              } , {new:true});
      
              await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
      
              await getSeller.save()
      
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

export const uploadProductsImagesNine = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getSeller = await userModel.findById(req.params.userId);
  
        const { imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix,
            imgSeven,
            imgEight,
            imgNine,
            imgTen, } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getSeller) {
            const products = await imageModel.findByIdAndUpdate(getSeller?._id , {
                imgNine:CloudImg?.secure_url,
               
              } , {new:true});
      
              await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
      
              await getSeller.save()
      
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

export const uploadProductsImagesTen = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //getting seller
  
        const getSeller = await userModel.findById(req.params.userId);
  
        const { imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix,
            imgSeven,
            imgEight,
            imgNine,
            imgTen, } = req.body;
  
        const CloudImg = await cloud.uploader?.upload(req?.file!.path);
  
        if (getSeller) {
            const products = await imageModel.findByIdAndUpdate(getSeller?._id , {
                imgTen:CloudImg?.secure_url,
               
              } , {new:true});
      
              await getSeller?.products.push(new mongoose.Types.ObjectId(products?._id))
      
              await getSeller.save()
      
  
          if (!products) {
            next(
              new AppError({
                message: "couldn't upload images",
                httpCode: HttpCode.BAD_REQUEST,
              })
            );
          } else {
            return res.status(201).json({
              message: "new images uploaded",
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
  

