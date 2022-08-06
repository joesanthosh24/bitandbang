"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("           Joe Santhosh"),
  handle: chalk.white("@joesanthosh"),
  shorthandle: chalk.white("js"),
  work:
    chalk.white("Angular Web Developer at ") +
    chalk.green("Wiley's Edge Consulting"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~joesanthosh24"),
  github: chalk.gray("https://github.com/") + chalk.green("joesanthosh24"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue("joe-santhosh-183770123"),
  web: chalk.cyan("https://portfolio-joesanthosh.netlify.app"),
  cardAcc: chalk.green("npm") + " " + chalk.white("joesanthosh24"),
  labelWork: chalk.white.bold("    Work:"),
  labelTwitter: chalk.white.bold(" Twitter:"),
  labelnpm: chalk.white.bold("     npm:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("     Web:"),
  labelCard: chalk.white.bold("    Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.cardAcc}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding;

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
