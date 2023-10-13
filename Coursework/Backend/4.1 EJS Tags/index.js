import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


// Middleware
// Look at solution to see a version where middleware is used for password check which is better practice
// app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) =>{
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em>This is some em text </em>"
    }
    res.render(__dirname+"/views/index.ejs",data);
})


// Listener
app.listen(port, ()=>{
    console.log(`Listening on Port: ${port}`)
})