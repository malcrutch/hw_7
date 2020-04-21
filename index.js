const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./api");
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    //add questions 
    { type: "input",
    name:"email",
    message:"what is your email?"
},
{
type: "checkbox",
name:"birthday",
choices:['january','february','march'],
    message:"when is your birthday?"


},

];









function writeToFile(fileName, data) {
    //setup writefile
    fs.promises.writeFile('gitignore.txt','questions')
}


function init() {
    inquirer.prompt(questions).then(inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));;
    })
    //build out intialize
//  console.log('hello');

}
init();


init();




