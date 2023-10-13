

import express from "express";
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


// Middleware
// Look at solution to see a version where middleware is used for password check which is better practice
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) =>{
    const day = new Date().getDay()
    let text = {kindDay: "the weekend",
        senEnd: "have fun"};
    if (day === 6 || day===0){
        text = {kindDay: "a weekday",
        senEnd: "work hard"}
    }
    res.render(__dirname+"/views/index.ejs",text);
})

// app.post("/check", (req, res) => {
//     var password = req.body.password;
//     if (password === "ILoveProgramming"){
//         res.sendFile(__dirname+"/public/secret.html");
//     }
//     else{
//         res.redirect("/");
//     }
// })


// Listener
app.listen(port, ()=>{
    console.log(`Listening on Port: ${port}`)
})