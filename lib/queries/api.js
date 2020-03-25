const { readPasswords, writePasswords, writeDatabase } = require('./dbaccess');
const { encrypt, decrypt, hashPassword } = require('../crypto');

function get(key) {
  console.log(`a soul has been called! RISE ${key}`);
  try {
    const passwords = readPasswords();
    console.log(key, decrypt(passwords[key]));
  } catch (error) {
    console.log(error);
  }
}

function set(key, value) {
  const passwords = readPasswords();
  console.log(`a new soul has entered the crypt! WELCOME ${key}`);
  passwords[key] = encrypt(value);
  writePasswords(passwords);
}

function unset(key) {
  console.log(`soul ${key} has been sent to the VOID!`);
  const passwords = readPasswords();
  delete passwords[key];
  writePasswords(passwords);
  console.log('POOF!');
}

function reset(masterPassword) {
  const newDatabase = {
    passwords: {},
    masterPassword: hashPassword(masterPassword),
  };
  writeDatabase(newDatabase);
}

module.exports = { get, set, unset };
