// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatemarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);

    fs.writeFile(fileName, markdown, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.
        prompt([
            {
                type: 'input',
                message: 'What is the name of your project?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Project description?',
                name: 'description'
            },
            {
                type: 'input',
                messsage: 'Installation requirements?',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'How will your project be used?',
                name: 'usage'
            },
            {
                type: 'list',
                message: 'What license will you use for this project?',
                name: 'license',
                choices: ['MIT', 'ISC', 'APACHE', 'none'],
            },
            {
                type: 'input',
                message: 'What is your Github username?',
                name: 'questions',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'questions',
            },
        ]).then((answers) => {
            writeToFile('readme.md', answers)
        }
        )

}

// Function call to initialize app
init();
