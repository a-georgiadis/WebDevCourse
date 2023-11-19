import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "billybob";
const yourPassword = "12345678";
const yourAPIKey = "79978cc0-35e3-4107-b67f-aea56decaf72";
const yourBearerToken = "91411258-7cad-4622-97d1-b9ca85c0c5ce";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try{
    let response = await axios.get(API_URL+`random`);
    let responseData = JSON.stringify(response.data)
    res.render("index.ejs", {content: responseData})
  }catch(error){
    res.render("index.ejs", {content: "An Error Occured Trying to Process Your Request"})
  }
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  try{
    let response = await axios.get(API_URL+"all", {
      auth: {
          username: yourUsername,
          password: yourPassword
      },
      params: { "page":2 }
  })
    let responseData = JSON.stringify(response.data)
    res.render("index.ejs", {content: responseData})
  }catch(error){
    res.render("index.ejs", {content: "An Error Occured Trying to Process Your Request"})
  }
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    let response = await axios.get(API_URL+"filter", {
      params: { "apiKey":yourAPIKey,
                "score":5 }
  })
    let responseData = JSON.stringify(response.data)
    res.render("index.ejs", {content: responseData})
  }catch(error){
    res.render("index.ejs", {content: "An Error Occured Trying to Process Your Request"})
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  
  try{
    let response = await axios.get(API_URL+"secrets/42", {
      headers: {"Authorization" : `Bearer ${yourBearerToken}`}
  })
    let responseData = JSON.stringify(response.data)
    res.render("index.ejs", {content: responseData})
  }catch(error){
    res.render("index.ejs", {content: "An Error Occured Trying to Process Your Request"})
  }
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
