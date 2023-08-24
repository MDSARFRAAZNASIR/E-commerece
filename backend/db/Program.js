const mongoose= require("mongoose")
const productSchema= new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    meat:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
    
})
module.exports= mongoose.model("programs", productSchema)
