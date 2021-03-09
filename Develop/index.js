const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
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
  ])
.then((data) => {
    console.log(data);

    var html = `#${data.name}
    ${data.location}
    ${data.linkd}
    ${data.githubname}`


    fs.writeFile("readme.md", html, err => {
    if(err){
        console.log(err);
    }else{
        console.log("Great! You're all set.");
    }
    
});

});

    
    







// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
