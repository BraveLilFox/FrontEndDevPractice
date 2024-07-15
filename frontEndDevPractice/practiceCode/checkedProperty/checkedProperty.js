// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element

const monthlyCheck = document.getElementById("monthlyCheck");
const visaRadio = document.getElementById("visaRadio");
const masterCardRadio = document.getElementById("masterCardRadio");
const payPalRadio = document.getElementById("payPalRadio");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const cardResult = document.getElementById("cardResult");

mySubmitBtn.onclick = function(){
    if(monthlyCheck.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }

    if(visaRadio.checked){
        cardResult.textContent = `You are paying with VISA`;
    }
    else if(masterCardRadio.checked){
        cardResult.textContent = `You are paying with MASTERCARD`;
    }
    else if(payPalRadio.checked){
        cardResult.textContent = `You are paying with PAYPAL`;
    }
    else{
        cardResult.textContent = `PLEASE select a payment type`;
    }
}
