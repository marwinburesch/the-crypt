const { get, set, unset } = require('./lib/queries/api');
const [command, key, value] = process.argv.slice(2);
const { askForPassword } = require('./lib/questions')

async function run() {
  if (command === 'get') {
    get(key);
  } else if (command === 'set') {
    const password = await askForPassword(key)
    set(key, password);
  } else if (command === 'unset') {
    unset(key);
  } else {
    console.log('this command is unknown');
  }
}
run()