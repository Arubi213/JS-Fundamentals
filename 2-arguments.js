#!/usr/bin/node
// A script that prints a message based on number of arguments passed

const args = process.argv.slice(2); // Remove first two default arguments

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}