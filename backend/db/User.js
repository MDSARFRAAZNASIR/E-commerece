const mongoose= require("mongoose")
const userSchema= new mongoose.Schema({
    name:String,
    id:Number,
    password:String
})
module.exports= mongoose.model("Users", userSchema)