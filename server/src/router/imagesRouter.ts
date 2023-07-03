import { Router } from "express";
import  { ImageOne ,ImageTwo, ImageThree ,ImageFour,ImageFive,ImageSix, ImageSeven,ImageEight , ImageNine ,ImageTen ,productsConfig} from "../config/multer";
import { 
    uploadProductsImagesEight, uploadProductsImagesFive ,uploadProductsImagesFour ,uploadProductsImagesNine ,uploadProductsImagesOne ,uploadProductsImagesSeven , uploadProductsImagesSix , uploadProductsImagesTen , uploadProductsImagesThree , uploadProductsImagesTwo
 } from "../controller/imagesController";

const imageRouter = Router()


imageRouter.patch("/oneimage/:productId" ,ImageOne,uploadProductsImagesOne )
imageRouter.patch("/two/:productId" ,ImageTwo,uploadProductsImagesTwo )
imageRouter.patch("/three/:productId" ,ImageThree,uploadProductsImagesThree )
imageRouter.patch("/four/:productId" ,ImageFour,uploadProductsImagesFour )
imageRouter.patch("/five/:productId" ,ImageFive,uploadProductsImagesFive )
imageRouter.patch("/six/:productId" ,ImageSix,uploadProductsImagesSix )
imageRouter.patch("/seven/:productId" ,ImageSeven,uploadProductsImagesSeven )
imageRouter.patch("/eight/:productId" ,ImageEight,uploadProductsImagesEight )
imageRouter.patch("/nine/:productId" ,ImageNine,uploadProductsImagesNine )
imageRouter.patch("/ten/:productId" ,ImageTen,uploadProductsImagesTen )


export default imageRouter