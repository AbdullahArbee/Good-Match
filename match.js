const prompt = require('prompt-sync')();
const first = prompt('Please enter the first string you would like to match..');
console.log(`your first string is ${first}`);

const second = prompt('Please enter the second string you would like to match...');
console.log(`your second string is ${second}`);


// Old way
// const readline = require('readline').createInterface({
//  input: process.stdin,
//  output: process.stdout
// })

//readline.question(`Enter your first string to match...`, name => {
//  const first = name;
//  console.log(`Hi ${name}!`)
//  readline.close()
//})
// console.log(first);
