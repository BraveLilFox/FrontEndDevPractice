// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const dieA = document.getElementById("dieA");
const dieB = document.getElementById("dieB");
const dieC = document.getElementById("dieC");
const min = 1;
const max = 6;
let randomNumA;
let randomNumB;
let randomNumC;

myButton.onclick = function(){
    randomNumA = Math.floor(Math.random() * max) + min;
    randomNumB = Math.floor(Math.random() * max) + min;
    randomNumC = Math.floor(Math.random() * max) + min;
    dieA.textContent = randomNumA;
    dieB.textContent = randomNumB;
    dieC.textContent = randomNumC;
};
