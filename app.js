const fs = require('fs')
const [command, key, value] = process.argv.slice(2)

function get() {
  console.log("a soul has been called:", key)
  try {
    const passwordsJSON = fs.readFileSync('./db.json', 'utf8');
    const passwords = JSON.parse(passwordsJSON);
    console.log(key, passwords[key])
  } catch (error) {

  }
}

function set() {
  console.log("a new soul has entered the crypt", key, value)
}

function unset() {
  console.log(key, 'unset')
}

if (command === "get") {
  get()
} else if (command === "set") {
  set()
} else if (command === "unset") {
  unset()
} else {
  console.log("this command is unknown")
}