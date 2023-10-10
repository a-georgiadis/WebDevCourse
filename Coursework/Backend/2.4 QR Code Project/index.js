/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    // Pass Questions Here
    {
        type:"input", // The type of input that the question is
        name:"url", // The name of the variable to store that into
        message: "Enter the URL you'd like to convert here:", // The message to display
        
    }
    // {
    //     type: "checkbox",
    //     name: ""
    // }
]).then((answers) => {
    // Use user feedback for something
    var qr_png = qr.image(answers.url);
    qr_png.pipe(fs.createWriteStream('qr_test.png'));

    fs.writeFile("url.txt", answers.url, (err) => {
        if (err){

        }
        else{
            console.log("Succesfully Created QR Code for: "+ answers.url);
        }
        
    })
    

}).catch((error) => {
    if (error.isTtyError){
        // Prompt couldn't be rendered in the current environment
        
    } else{
        // Something else went wrong

    }
})

