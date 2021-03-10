// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseLink;
  switch(license) {
    case "MIT":
      licenseLink = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      return licenseLink
    }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if(license) { 
    return 'license'
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ${renderLicenseBadge(response.license)}
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
${response.test}
https://github.com/${response.username}`
;
}

module.exports = generateMarkdown;
