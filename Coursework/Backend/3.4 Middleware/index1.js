import express from "express";
// Import bodyparser middleare
import bodyParser from "body-parser";
// Dynamic way to retrieve the directory name of the file
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Activate the Middleware
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) =>{
  console.log(req.body)
  res.sendStatus(200)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
