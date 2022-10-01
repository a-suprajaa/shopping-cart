var mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
     "name":{
        type:String,
        required:true,
        unique:true
     },
     "mrp":{
        type:Number,
        required:true
     }

})

module.exports = new mongoose.model("cart1",cartSchema)