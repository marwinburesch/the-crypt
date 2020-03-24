const { readPasswords, writePasswords } = require('./dbaccess');

function get(key) {
    console.log(`a soul has been called! RISE ${key}`);
    try {
        const passwords = readPasswords();
        console.log(key, passwords[key]);
    } catch (error) {
        console.log(error);
    }
}

function set(key, value) {
    const passwords = readPasswords();
    console.log(`a new soul has entered the crypt! WELCOME ${key}: ${value}`);
    passwords[key] = value;
    writePasswords(passwords);
}

function unset(key) {
    console.log(`soul ${key} has been sent to the VOID!`);
    const passwords = readPasswords();
    delete passwords[key];
    writePasswords(passwords);
    console.log('POOF!');
}

module.exports = { get, set, unset };