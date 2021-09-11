// Bismillah
// We first need to get the users input first
const prompt = require('prompt-sync')({sigint: true});

const first = prompt('Please enter the first string you would like to match..');
console.log(`your first string is ${first}`);

const second = prompt('Please enter the second string you would like to match...');
console.log(`your second string is ${second}`);

// We need now to slice through each first letter of both variables and count the occurrences
for (const each of first) {
    console.log(each);
    const count = (first.match(/each/g) || []).length;
    console.log(count);
}

for (const next of second){
     console.log(next);
     const again = (second.match(/next/g) || []).length;
     console.log(again);
}

//After counting the occurrences need to bring it to 2 digits

//Then get the percentage

//Output the percentage with message if below or above 60%

// Old way of reading input, Not good
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
