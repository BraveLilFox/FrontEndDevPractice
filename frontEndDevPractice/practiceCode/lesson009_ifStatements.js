// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something different

// Ex. 1
let age = 17;

if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18yrs to see me");
}

// Ex. 2
let time = 14;

if(time < 12){
    console.log("Good morning!");
}
else{
    console.log("Good afternoon!");
}

// Ex. 3
let isStudent = true;

if(isStudent){
    console.log("You are a student.");
}
else{
    console.log("You are not a student.");
}

// Ex. 4
let age = 22;
let doesDrink = false;

if(age >= 21){
    console.log("You can legally drink!")

    if(doesDrink){
        console.log("You drink!");
    }
    else{
        console.log("You do not drink.")
    }
}
else{
    console.log("You cannot legally drink!")
}

//Ex. 5
let age = window.prompt("What is your age?");

if(age >= 100){
    document.getElementById("myP").textContent = "You are TOO old to use this site.";
}
else if(age == 0){
    document.getElementById("myP").textContent = "You were just born, you cannot use this site";
}
else if(age >= 18){
    document.getElementById("myP").textContent = "You are old enough to use this site.";
}
else if(age < 0){
    document.getElementById("myP").textContent = "You can't be under 0 years old.";
}
else{
    document.getElementById("myP").textContent = "You must be 18+ to use this website.";
}
