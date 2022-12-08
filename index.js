const inquirer = require('inquirer');
const fs = require('fs');

inquirer.
    prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'pname'
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
    ]);