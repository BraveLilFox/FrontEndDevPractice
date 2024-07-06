// type conversion = change the datatype of a value to another
//                   (strings, numbers. booleans)

let age = window.prompt(`How old are you?`);

age += 1;
console.log(age);
//this won't work because when we accept user 
//          input it is accepted as a string.

// Let's try again.
let age = window.prompt(`How old are you?`);

// if we add this type conversion it
//          converts the datatype to a number
age = Number(age);
age += 1;

console.log(age);

// Outputs when converted
// Strings
let x = `pizza`;
let y = "pizza";
let z = 'pizza';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
    // NaN 'number'
console.log(y, typeof y);
    // string
console.log(z, typeof z);
    // false 'boolean'

// No User Input
let x = ``;
let y = "";
let z = '';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
    // 0 'number'
console.log(y, typeof y);
    // string
console.log(z, typeof z);
    // false 'boolean'

// Just the Variable and no declaration
let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
    // NaN 'number'
console.log(y, typeof y);
    // undefined string
console.log(z, typeof z);
    // false 'boolean'

// Number as the variable
let x = `9`;
let y = "9";
let z = '9';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
    // 9 'number'
console.log(y, typeof y);
    // 9 string
console.log(z, typeof z);
    // true 'boolean'
