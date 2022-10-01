const express = require("express")
const router1 = require("./routes/display")
const bodyparser = require("body-parser")

const app = express()
const mongoose = require("mongoose")


//connection to db
mongoose.connect("mongodb://localhost/ecom",{
    useNewUrlParser : true,
   
})
.then(()=>console.log("db connected"))
.catch(err => console.log(err))




// view engine setup
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.static("public"))
app.set("view engine","ejs")


app.use(router1)

app.listen("3000",()=>console.log("server started on 3000"))