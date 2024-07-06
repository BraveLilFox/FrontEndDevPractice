// variable = A container that stores a value.
//            Behaves as if it were a value it contains.

// 1. declaration    let x;
// 2. assignment     x = 100;

// These are number variables
let age = 8;
let price = 10.99;
let gpa = 3.1;

console.log(`You are ${age} years old.`);
console.log(`The price will be ${price} today`);
console.log(`Your GPA is ${gpa}`);
console.log(typeof gpa);

// These are string variables
let firstName = `Kaide`
let favFood = `Macaroni`
let email = `kkpotchka415@gmail.com`

console.log(firstName);
console.log(`You like ${favFood}, right?`);
console.log(`Your email is ${email}`);
console.log(typeof email)

// These are Boolean Variables
let forSale = true;
let student = false;
let online = false;

console.log(`Online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${student}`);
console.log(typeof online);

// Example on how to use variables to manipulate elements in HTML
let fullName = `Kaide Ryder Potchka`;
let age = 19;
let studentStatus = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old today!`;
document.getElementById("p3").textContent = `Enrolled: ${studentStatus}`;
