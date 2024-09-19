const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 1;
const max = 6;

function rollDice() {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    rl.question("Wanna roll dice again? (Y/N) ", function (ansU) {
        if (ansU === 'N') {
            rl.close(); // Exit input mode
        } else {
            rollDice(); // Roll again
        }
    });
}

rollDice();
