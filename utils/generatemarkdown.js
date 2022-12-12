// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'none'){
        return''
    } else {
        return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'none'){
        return''
    } else {
        return `- [License](#license)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'none'){
        return''
    } else {
        return `## License`
}};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
- [Description](#description) 
- [Installation](#installation) 
- [Usage](#usage) 
- [Questions](#questions)
- [Contributors](#contributors)
- [Tests](#tests)
${renderLicenseLink(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Questions
${data.questions}

## Contributors



## Tests




${renderLicenseSection(data.license)}
`;
}



module.exports = generateMarkdown;