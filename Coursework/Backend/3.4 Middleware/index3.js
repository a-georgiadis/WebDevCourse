import express from "express";
// Import bodyparser middleare
import bodyParser from "body-parser";
// Dynamic way to retrieve the directory name of the file
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


// Example of custom middleware function
function logger(req, res, next){
  console.log(`Method: ${req.method}, URL: ${req.url}`);
  next(); // Next is really important to pass on to the next function in order
}

// Activate the Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
  var name = req.body.street + req.body.pet;
  res.send(`<h1>Your band name is:</h1><h2>${name}🤙</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
