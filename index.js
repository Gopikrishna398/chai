require('dotenv').config();

const express = require("express");

const app=express()

app.get("/",(req,res)=>{
    res.send("hello")
});
app.get("/gopi",(req,res)=>{
    res.send("<h1>Hello gopi<h1>")
});

app.listen(process.env.PORT,(req,res)=>{
    console.log(`port running on port${process.env.PORT}`)
})