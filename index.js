const express = require("express");
const morgan = require("morgan");
const app = express();



 app.use(morgan("dev"));
// app.use((req, res, next) =>{
//     console.log("This is my first middleware!");
//     return next();
//     // console.log("this is my first middle ware - after calling next();");
// });
app.use((req, res, next)=> {
    req.requestTime = Date.now();
    next();
});
app.use("/dogs", (req, res, next) => {
    console.log("this is middleware for '/dogs' only!");
next();
});



app.get("/", (req, res) =>{
    console.log("this is the request time: " + req.requestTime)
    res.send("Home page");
});

app.get("/dogs", (req,res)=>{
    res.ststus(404).send("woOF wOOf!")
});



app.use((req,res) =>{
    res.send("NOT FOUND");
});



app.listen(3000, () =>{
    console.log("App is running on localhost:3000");
});