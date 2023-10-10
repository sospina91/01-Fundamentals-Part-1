/*
//define js variable
let js = 'amazing';
//create a pop up alert
//if (js === 'amazing') alert('Javascript is FUN!');
//40 + 8 + 23 - 10;
//display the result on the console
console.log(40 + 8 + 23 - 10);
console.log("jonas");
console.log(23);
//delcaring a variable
let firstName = "Jonas";
console.log(firstName);

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);
console.log(typeof null);

let age = 30;
age = 31;
const birthYear = 1991;


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2
const firstName = 'Jonas';
const lastName = 'Schemedtmann';
console.log(firstName + '  ' + lastName);
//assignment operators
let x = 10 + 5; //15
x += 10; // x=x+10=25
x *= 4; //x=x*4 = 100
x++; //x=x+1
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); //>,<,>=,<=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = "Samir";
const job = "Consultant";
const birthYear = 1991;
const year = 2037;
const samir = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(samir);
const samirNew = `I'm ${firstName} a ${year - birthYear} years old ${job} !`;
console.log(samirNew);
console.log('string with \n\
multiple \n\
lines');
console.log(`string with
multiple
lines`);

const age = 15;
if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century
if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);


// Type conversion lECTURE 20
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(typeof inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');



// 5 Falsy values : 0, '', undefined, null NaN They will become false when converted to a Boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don´t spend it all ;");
} else {
    console.log('You should get a Job!');
}

const height = 0.0;;
if (height) {
    console.log('YAY! hight is defined');
} else {
    console.log('height is UNDEFINED');
}
*/
/// COMPARISON OPERATOR strict
const age = 18;
if (age === 18) console.log('you just became an adult :D (strict)');
/// loose equality operator == does type coersion NOT USED VERY OFTEN
if (age == 18) console.log('you just became an adult :D (loose)');

const favourite = Number(prompt("What´s your favourite number?"));
console.log(favourite);
if (favourite === 23) {
    console.log('Cool 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also an amazing number');
} else {
    console.log('Number is not 23 or 7');
}

// Different operator
if (favourite !== 23) console.log('Why not 23?');
