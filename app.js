const { get, set, unset } = require('./lib/queries/api');
const [command, key, value] = process.argv.slice(2);

if (command === 'get') {
    get(key);
} else if (command === 'set') {
    set(key, value);
} else if (command === 'unset') {
    unset(key);
} else {
    console.log('this command is unknown');
}
