const express=require('express');


const app=express();

app.get('/',(req,res)=>{

    res.end("Server Started");
});

app.listen(process.env.PORT|8000,(err)=>{
    console.log("server listining on port 8000");
});