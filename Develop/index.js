const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');



const generateREADME = (response) =>
`# ${response.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${response.description}
## Installation
${response.install}
## Usage
${response.usage}
## License 
This application has the following License: ${response.license}
## Contributing
${response.contribution}
## Tests
${response.test}`;



inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What would you like your title to be?',
    },
    {
      type: 'input',
      name: 'description',
      message:'description of your project.'

    },
    {
      type: 'input',
      name: 'install',
      message:'Add any installation instructions.'

    },
    {
      type: 'input',
      name: 'usage',
      message:'Add usage information.'

    },
    {
      type: 'input',
      name: 'contribution',
      message:'Add contribution guidelines.'

    },
    {
      type: 'input',
      name: 'test',
      message:'Add test instructions.'

    },
    {
      type: 'list',
      name: 'license',
      message:'Would you like to add a license?.',
      choices: ['None', 'Apache', 'MIT', 'BSD']

    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where do you live?',
    },
    {
      type: 'input',
      name: 'linkd',
      message: 'What is your linkedin bio?',
    },
    {
        type: 'input',
        name: 'githubname',
        message: 'What is your GitHub username?'
    },
  ]).then((response) => {
    const readme = generateREADME(response);
    fs.writeFile('README.md', readme, (err) => 
    err ? console.log(err) : console.log('Success!'));
  });
  
    