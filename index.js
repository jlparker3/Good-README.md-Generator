const inquirer = require('inquirer')

const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your application?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the link to your application?',
            name: 'link',
        },   
        {
            type: 'input',
            message: 'Please provide the license you used for this project',
            name: 'license',
        },
        {
            type: 'input',
            message: 'Would you like to include any badge links?',
            name: 'badge',
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
            message: 'How can a user install the application?',
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
            message: 'Please provide the application tests',
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
        }  
       

    ])
    .then((response) => {
    
const README = `
# Name of application
    ${response.name}
## Link to application
    ${response.link}   
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
    `

        fs.writeFile(`${response.name}.README.md`, README, (err) =>
        err ? console.error(err) : console.log('Success!')
        );

        console.log('response', response);

    });





