// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start,end)

// Ex 1 (this only works for this specific name though)
const fullName = "Kaide Ryder";

let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

// Ex 2 (more dynamic version of EX 1)
const fullName = "Dove Sawyer";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") +1);

console.log(firstName);
console.log(lastName);
