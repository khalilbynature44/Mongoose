const express= require("express");
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://bynature:khalilbynature@cluster0.38zxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",()=>console.log("database is connected"));
const app=express();
app.use('/',require("./routes/userRoutes.js"));
const port=3000;
app.listen(port,()=> console.log("listen on port:"+ port));