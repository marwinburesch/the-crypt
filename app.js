const { get, set, unset, reset } = require('./lib/queries/api');
const [command, key] = process.argv.slice(2);
const { askForPassword, askForMasterPassword } = require('./lib/questions');
const { verifyHash } = require('./lib/crypto');
const { readMasterPassword } = require('./lib/queries/dbaccess');

async function run() {
  const answeredMasterPassword = await askForMasterPassword();

  if (command === 'reset') {
    return reset(answeredMasterPassword);
  }
  const masterPassword = readMasterPassword();

  if (!verifyHash(answeredMasterPassword, masterPassword)) {
    console.error('UNACCEPTABLE!!!');
    return;
  }

  if (command === 'get') {
    get(key);
  } else if (command === 'set') {
    const password = await askForPassword(key);
    set(key, password);
  } else if (command === 'unset') {
    unset(key);
  } else if (command === 'getMaster') {
    getMasterPassword();
  } else {
    console.log('this command is unknown');
  }
}
run();
