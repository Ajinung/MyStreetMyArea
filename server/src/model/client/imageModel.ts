import mongoose from "mongoose"

import { images } from "../../interfaces/allInterfaces"

interface allImgs extends images , mongoose.Document{}


const imagesSchema = new mongoose.Schema<images>({
imgOne:{
    type : String
},
imgTwo:{
    type : String
},
imgThree:{
    type : String
},
imgFour:{
    type : String
},
imgFive:{
    type : String
},
imgSix:{
    type : String
},
imgSeven:{
    type : String
},
imgEight:{
    type : String
},
imgNine:{
    type : String
},
imgTen:{
    type : String
}
},{timestamps : true} )


const imageModel = mongoose.model<allImgs>("AllImages" , imagesSchema)

export default imageModel