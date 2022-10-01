var mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
     "name":{
        type:String,
        required:true
     },
     "mrp":{
        type:Number,
        required:true
     }

})

module.exports = new mongoose.model("product1",productSchema)