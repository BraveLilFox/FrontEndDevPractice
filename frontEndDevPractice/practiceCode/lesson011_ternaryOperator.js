// ternary operator = a shortcut to if() and else() statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse

let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor";

console.log(message);

// ALTERNATIVE TO SOMETHING LIKE THIS.

let age = 21;
if(age >= 18){
  message = "You're an adult";
}
else{
  message = "You're a minor;
}

console.log(message);

// Ex. 1
let time = 8
let greeting = time < 12 ? "Good morning!" : "Good afternoon";
console.log(greeting)

// Ex. 2
let isStudent = true;
let message = isStudent ? "You are a student" : "You aren't a student";
console.log(message);

// Ex.3
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10: 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);
