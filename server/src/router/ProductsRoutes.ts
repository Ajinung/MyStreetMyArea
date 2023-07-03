import {Router} from "express"
import { getAllProducts, uploadProducts } from "../controller/productsController"
import { productsConfig } from "../config/multer"



const productRoutes = Router()



productRoutes.get("/allproducts" ,getAllProducts )
productRoutes.get("/singleproduct/:productId" ,getAllProducts )
productRoutes.post("/newproduct/:userId",productsConfig , uploadProducts)

export default productRoutes

/**  imgTwo:CloudImg?.secure_url,
          imgThree:CloudImg?.secure_url,
          imgFour:CloudImg?.secure_url,
          imgFive:CloudImg?.secure_url,
          imgSix:CloudImg?.secure_url,
          imgSeven:CloudImg?.secure_url,
          imgEight:CloudImg?.secure_url,
          imgNine:CloudImg?.secure_url,
          imgTen:CloudImg?.secure_url, 
          imgTwo,
        imgThree,
        imgFour,
        imgFive,
        imgSix,
        imgSeven,
        imgEight,
        imgNine,
        imgTen,
          */