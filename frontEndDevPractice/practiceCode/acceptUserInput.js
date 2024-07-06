// How to accept user input

// 1. EASY WAY = window prompt
let username;

username = window.prompt(`What's your username?`);
console.log(username);

// 2. PROFESSIONAL WAY = HTML textbox
let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
