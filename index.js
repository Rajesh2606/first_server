const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello, express is working!");
});

app.get("/about",(req,res)=>{
    res.json({message:"this is express.js backend"});

});

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});