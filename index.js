const inquirer = require('inquirer')

const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your application?',
            name: 'name',
        },
        //WILL ADD IN FOR LIVE SITE APPLICATIONS
        // {
        //     type: 'input',
        //     message: 'What is the link to your application?',
        //     name: 'link',
        // },   
        {
            type: 'checkbox',
            message: 'Please provide the license you used for this project',
            name: 'license',
            choices: ["MIT", "Apache", "Mozilla Public License", "none"]
        },
        {
            type: 'input',
            message: 'What is the description of your application?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is the purpose of your application?',
            name: 'purpose',
        },
        {
            type: 'input',
            message: 'What command should be run to install the application? (npm i)',
            name: 'installation',
        },   
        {
            type: 'input',
            message: 'What is the project usage?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who made contributions to the application?',
            name: 'contributions',
        }, 
        {
            type: 'input',
            message: 'What command should be run to run application tests (npm test)',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Do you want to credit anything such as a CSS/HTML framework?',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'What was your experience creating this project?',
            name: 'experience',
        },   
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github',
        }, 
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }  
       

    ])
    .then((response) => {
    
const README = `
# Name of application
    ${response.name} 
##  Description
    ${response.description}
## Purpose
    ${response.purpose}

## Table of Contents
   -[Link to application](#name)<br>
   -[Description](#description)<br>
   -[Usage](#usage)<br>
   -[License](#license)<br>
   -[Tests](#test)<br>
   -[Github](#github)<br>
   -[Email](#email)<br>



## Installation
    ${response.installation}
## Usage Information
    ${response.usage}
## License
    ${response.license}   
## Contributions
    ${response.contributions}
## Credits
    ${response.credits}
## Tests    
    ${response.test}
## Experience 
    ${response.experience}
## GitHub
    ${response.github}
## Email
    ${response.email}   
    `

        fs.writeFile(`${response.name}.README.md`, README, (err) =>
        err ? console.error(err) : console.log('Success!')
        );

        console.log('response', response);

    });





