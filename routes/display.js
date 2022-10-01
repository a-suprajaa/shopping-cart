const router1 = require("express").Router()
const productModel = require("../models/product")
const cartModel = require("../models/cart")
const cart = require("../models/cart")
router1.get("/",async(req,res) => {
        
        const allproduct =await productModel.find()
        console.log(allproduct)
        res.render("display",{allproduct}) //{allproduct:allproduct}
                                            //{ allproduct :[{id:1..},{id:2..},{id:3...}]} ==> how data is passed
 })

router1.get("/product/:_id",async(req,res) => {
         const _id = req.params
         const productasked = await productModel.find({_id});
         console.log(productasked)
        res.render("description",{productasked})


})


router1.post("/addtocart/:_id",async(req,res) => {
    const _id = req.params
    const productasked = await productModel.find({_id});
    const pname = productasked[0].name
    const pmrp = productasked[0].mrp
    const newadd = new cartModel({name : pname,mrp:pmrp})
    newadd.save()
    .then(console.log("saved"))
    .catch(err => console.log(err))
    res.redirect("/cart");
   


})

router1.get("/cart",async(req,res) => {
    const fetchall= await cartModel.find()
    console.log(fetchall)
    res.render("cart",{fetchall})
})

router1.post("/delete/:_id",async(req,res) => {
    const _id = req.params
    cartModel.deleteOne({_id})
    .then(console.log("deleted"))
    .catch(err => console.log(err))
    const fetchall= await cartModel.find()
    res.render("cart",{fetchall})
})


module.exports = router1;