// string methods = allow you to manipulate and work with text (strings)\

let userName = "KaideRyder ";
// Charater at method
console.log(userName.charAt(0));

// Index of character method
console.log(userName.indexOf("e"));

// Last index of the given character
console.log(userName.lastIndexOf("e"));

// Length of the string itself
console.log(userName.length);

// Trim out the white space
userName = userName.trim();
console.log(userName);

// Make all characters uppercase
userName = userName.toUpperCase();
console.log(userName);

// make all characters lowercase
userName = userName.toLowerCase();
console.log(userName);

// Repeat the string multiple times
userName = userName.repeat(3);
console.log(userName)

// Ex 1 (Starts with method)
let userName = "KaideRyder ";

let result = userName.startsWith(" ");

if(result){
    console.log("Your username cannot begin with a space.")
}
else{
    console.log(userName);
}

// Ex 2 (Ends with method)
let userName = "KaideRyder";

let result = userName.endsWith(" ");

if(result){
    console.log("Your username cannot end with a space.")
}
else{
    console.log(userName);
}

// Ex 3 (Includes method)
let userName = "KaideRyder";

let result = userName.includes(" ");

if(result){
    console.log("Your username cannot include a space.")
}
else{
    console.log(userName);
}

// Ex 4 (Replace All Method)
let phoneNumber = "260-212-8521";

phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber);

//Ex 5 (Pad Start Method)
let phoneNumber = "260-212-8521";

// the first number refers to how long the string should be, and the second is what fills that space
phoneNumber = phoneNumber.padStart(15, "0");

console.log(phoneNumber);

// Ex 6 (Pad End Method, like padStart but at the end of the string)
let phoneNumber = "260-212-8521";

phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);
