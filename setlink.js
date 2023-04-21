// const fs = require("fs");
// const readline = require("readline");
import fs from "fs";
import readline from "readline";

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);

  //
  fs.writeFile(
    "./profile/link.js",
    `const offerLink = "${value}";`,
    function (err) {
      console.log("Link set seccussful.");
      process.exit();
    }
  );
});
