const fs = require('fs');
const filePath = 'lib/db.json';

function readMasterPassword() {
  const dbJSON = fs.readFileSync(filePath, 'utf8');
  const db = JSON.parse(dbJSON);
  const masterPassword = db.masterPassword
  return masterPassword;
}

function readPasswords() {
  const dbJSON = fs.readFileSync(filePath, 'utf8');
  const db = JSON.parse(dbJSON);
  const passwords = db.passwords
  return passwords;
}

function writePasswords(passwords) {
  fs.writeFileSync(filePath, JSON.stringify(passwords, null, 2));
}

module.exports = { readPasswords, writePasswords, readMasterPassword };
