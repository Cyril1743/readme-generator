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
  return `## License Section
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  # Table of Contents
  1. [Description](#description)
  2. [Table of Contents](#table-of-contents)
  3. [What was the motivation?](#what-was-the-motivation)
  4. [Why did I build it?](#why-did-i-build-it)
  5. [What problem does it solve?](#what-problem-does-it-solve)
  6. [What did I learn?](#what-did-i-learn)
  7. [License Section](#license-section)
  8. [Installation](#installation)
  9. [Usage](#usage)
  10. [Contributions](#contributions)
  11. [Tests](#tests)
  12. [Questions?](#questions)
  ## What was the motivation?
  ${data.motivation}
  ## Why did I build it?
  ${data.why}
  ## What problem does it solve?
  ${data.problem}
  ## What did I learn?
  ${data.learn}
  ${renderLicenseSection(data.license)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.tests}
  ## Questions?
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
