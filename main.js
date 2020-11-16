const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.clear();
console.log(`
================================
======== Welcome to WAR ========
================================
`);

readline.question('What is the LOWEST possible number? ', lowNumInput => {
    let lowNum = lowNumInput;
    readline.question('What is the HIGHEST possible number? ', highNumInput => {
        let highNum = highNumInput;
        dealerNum = Math.floor(Math.random() * highNum + lowNum);
        readline.question(`Choose a number between ${lowNum} and ${highNum}: `, playNumInput => {
            if (playNumInput > dealerNum) {
                console.log(`Dealer had ${dealerNum}`);
                console.log('Yay, you WON!');
                readline.close();
            } else {
                console.log(`Dealer had ${dealerNum}`);
                console.log('Sorry, you LOST...');
                readline.close();
            }
        });
    });
});
