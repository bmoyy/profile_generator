const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = '';
let activity = '';
let music = '';
let meal = '';
let sport = '';
let power = '';

rl.question('What\'s your name?', (answer) => {let name = answer;
rl.question('What\'s an activity you like doing?', (answer) => {let activity = answer
rl.question('What do you like to listen to?', (answer) => {let music = answer
rl.question('Which meal is your favourite?', (answer) => {let meal = answer
rl.question('What\'s your favourite sport?', (answer) => {let sport = answer
rl.question('What is your superpower?', (answer) => {let power = answer
console.log(`${name} loves listening to ${music} while ${activity}, eating ${meal}. They prefer ${sport} over anything, and is amazing at ${power}.`);

rl.close();  
});
});
});
});
});
});






