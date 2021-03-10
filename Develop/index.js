// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [{
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
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function(err){
    console.log(fileName)
    console.log(data)
    if (err) {
      return console.log(err)
    } else {
      console.log("Congrats! README is generated.")
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data)
  })
}

// Function call to initialize app
init();
 