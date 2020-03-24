const fs = require('fs');
const filePath = 'lib/db.json';

function readDatabase() {
  const databaseJSON = fs.readFileSync(filePath, 'utf8');
  const database = JSON.parse(databaseJSON);
  return database;
}

function writeDatabase(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function readMasterPassword() {
  const database = readDatabase()
  const masterPassword = database.masterPassword
  return masterPassword;
}

function readPasswords() {
  const database = readDatabase()
  const passwords = database.passwords
  return passwords;
}

function writePasswords(passwords) {
  const database = readDatabase()
  database.passwords = passwords
  writeDatabase(database)
}

module.exports = { readPasswords, writePasswords, readMasterPassword };
