const express = require("express");
const app =express();
const db =require("./connections/db")
require("dotenv").config();
app.use(require('./documentation/index'))

const PORT = process.env.PORT 
app.use(express.json())
app.use('/',require("./routers"))

module.exports=app.listen((PORT),(err)=>{
    if(err){
        throw err
    }else{
        console.log(`server is woring port:${PORT}`);
        console.log(`api url: http://localhost:${PORT}`);
        console.log(`docs: http://localhost:${PORT}/docs`);
    }
})


