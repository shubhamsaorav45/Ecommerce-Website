import express from 'express';
import dotenv from'dotenv'
import colors from 'colors'
import connectDB from './config/db.js';
import products from "./data/products.js"


dotenv.config();


connectDB();

const app=express();


app.get("/",(req,res)=>{
      res.send("App is running")
})
app.get("/api/products",(req,res)=>{
    res.json(products);
})
app.get("/api/products/:_id",(req,res)=>{
    const product=products.find((p)=>p._id===req.params._id);
    res.json(product);
})

const PORT=process.env.PORT ||5000
app.listen(PORT,console.log(`server is running on ${process.env.NODE_ENV} port ${PORT} `.yellow.bold))