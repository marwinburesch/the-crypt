const readline = require('readline');

function askQuestion(question, { hideAnswer } = {}) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.output.write('\n');
      readlineInterface.close();
    });

    if (hideAnswer) {
      readlineInterface._writeToOutput = function () {
        readlineInterface.output.write('');
      };
    }
  });
}

function askForPassword(key) {
  return askQuestion(`Enter a password for ${key}: `);
}

function askForMasterPassword() {
  return askQuestion(`Enter the password of passwords:`, { hideanswer: true });
}

module.exports = { askForPassword, askForMasterPassword };
