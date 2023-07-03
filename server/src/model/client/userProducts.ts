import mongoose from "mongoose";

import { userProducts } from "../../interfaces/allInterfaces";


interface products extends userProducts , mongoose.Document{}


const productSchema = new mongoose.Schema<userProducts>({
category : {
    type : String
},
location : {
    type :String
},
price : {
    type : String
},
//create an array for images ----- limit of ten
productImage : {
    type : String
},
rate : {
    type : []
},
sellerName : {
    type : String
},
views : {
    type : []
},
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
})



const productModel = mongoose.model<products>("AllProducts" , productSchema)


export default productModel