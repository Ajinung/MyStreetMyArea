import multer from "multer";

import { Request } from "express";

type DestinationCallBack = (error: Error | null, destination: string) => void;

type FileCallBack = (error: Error | null, filename: string) => void;

const Storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallBack
  ) => {
    cb(null, "Uploads");
  },

  filename: (req: Request, file: Express.Multer.File, cb: FileCallBack) => {
    cb(null, file.originalname);
  },
});

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("productImage")) {
//     cb(null, true);
//   } else {
//     cb("Please upload only images.", false);
//   }
// };

const productsConfig = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("productImage")

const ImageOne = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgOne")

const ImageTwo = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgTwo")

const ImageThree = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgThree")

const ImageFour = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgFour")


const ImageFive = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgFive")


const ImageSix = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgSix")


const ImageSeven = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgSeven")


const ImageEight = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgEight")


const ImageNine = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgNine")


const ImageTen = multer({
  storage: Storage,
  // fileFilter: multerFilter
}).single("imgTen")

//.single("productImage")
//array("productImage" ,10)


export { ImageOne ,ImageTwo, ImageThree ,ImageFour,ImageFive,ImageSix, ImageSeven,ImageEight , ImageNine ,ImageTen ,productsConfig};

// export {productsConfig}