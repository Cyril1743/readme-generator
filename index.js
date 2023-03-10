// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of the repository?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description?",
        name: "description"
    },
    {
        type: "input",
        message: "What was the motivation?",
        name: "motivation"
    },
    {
        type: "input",
        message: "Why did you build it?",
        name: "why"
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "problem"
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "learn"
    },
    {
        type: "list",
        message: "What is the license?",
        name: "license",
        choices: ["MIT", "GPLv2", "Apache 2.0", "GPLv3"]
    },
    {
        type: "input",
        message: "How do users install this application?",
        name: "installation"
    },
    {
        type: "input",
        message: "How do users use this application?",
        name: "usage"
    },
    {
        type: "input",
        message: "Guidelines for contribution?",
        name: "contributions"
    }, {
        type: "input",
        message: "Any tests you'd like users to run?",
        name: "tests"
    }, {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    }, {
        type: "input",
        message: "What email should users send questions?",
        name: "email"
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, "", function (err) {
        if (err) {
            console.log(err)
        }
    })
    inquirer.prompt(data)
        .then(function (data) {
            fs.appendFile(`./utils/${fileName}`, generateMarkdown(data), function (err) {
                err ? console.log(err) : console.log("Successfully added Data")
            })
        })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("ReadMe.md", questions)
}

// Function call to initialize app
init();
