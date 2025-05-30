const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    console.log(req)
    res.json({
        message:"This is Home Page for test."
    })
})

app.get("/about",(req,res)=>{
    res.json({
        message:"this is about page."
    })
})
