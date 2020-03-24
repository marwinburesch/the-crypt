const fs = require('fs');
const filePath = 'lib/passwords.json';

function readPasswords() {
    const passwordsJSON = fs.readFileSync(filePath, 'utf8');
    const passwords = JSON.parse(passwordsJSON);
    return passwords;
}

function writePasswords(passwords) {
    fs.writeFileSync(filePath, JSON.stringify(passwords, null, 2));
}
module.exports = { readPasswords, writePasswords };
