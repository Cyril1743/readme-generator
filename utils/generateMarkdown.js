// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  switch (license) {
    case "MIT":
      return "ReadMe.md", "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    case "GPLv2":
      return "ReadMe.md", "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)"
    case "Apache 2.0":
      return "ReadMe.md", "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    case "GPLv3":
      return "ReadMe.md", "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    default: ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license)
  switch (license) {
    case "MIT":
      return "[MIT license link](https://opensource.org/licenses/MIT)"
    case "GPLv2":
       return "[GPLv2 license link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    case "Apache 2.0":
      return "[Apache license link](https://opensource.org/licenses/Apache-2.0)"
    case "GPLv3":
      return "[GPLv3 license link](https://www.gnu.org/licenses/gpl-3.0)"
    default: ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## LicenseSection \n ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n
  ## Description \n
  ${data.description} \n
  ## What was the motivation? \n
  ${data.motivation} \n
  ## Why did I build it? \n
  ${data.why} \n
  ## What problem does it solve? \n
  ${data.problem} \n
  ## What did I learn? \n
  ${data.learn} \n
  ## Link to deployed application \n
  [Deployed Application](${data.link}) \n
  ## Screenshot \n
  ![Screenshot](${data.image}) \n
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
