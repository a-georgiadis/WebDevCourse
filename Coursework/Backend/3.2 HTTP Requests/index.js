import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Port openned on localhost: ${port} `)
})

app.get("/", (req, res)=>{
    console.log(req.rawHeaders)
    res.send("<h1>Homepage</h1>");
})

app.get("/about", (req, res)=>{
    console.log(req.rawHeaders)
    res.send("<p>Information about me!</p>");
})

app.get("/contact", (req, res)=>{
    console.log(req.rawHeaders)
    res.send("<h1>Some contact info:</h1>");
})