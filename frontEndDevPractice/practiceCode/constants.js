// const = a variable that can't be changed once assigned

const pi = 3.141592
let radius;
let circumference;

// when you don't use a const variable then anyone
//          can come in and change the variable or
//          or you could accidentally change it.
// const is used as an EXTRA security measure so that
//          nothing gets changed that you don't want to
pi = 420.69;

radius = window.prompt(`Enter the radius of your circle`);
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);

/* This is a program that helps the user to
    the circumference of a circle using the
    user input.

    when using a CONST variable type you
    should always put things such as numbers
    and boolean names in all caps for pro-
    fessional reasons.
*/

const PI = 3.141592
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("mySpan").textContent = circumference + "cm";
}
