var number = 55.24
//Round
console.log(Math.round(number));
//Floor
console.log(Math.floor(number));
//Ceil
console.log(Math.ceil(number));

//Number ko String mai convert krna
console.log(typeof number);
console.log(typeof number.toString());

//String ko Number mai Convert krna:->
//1. shoro mai + laga do.
//2. Number() ke function main daldo.
//3. ParseInt() ye Decimal ko Convert nahi krta.
//4. ParseFloat() Ye Decimal ko bi Convert kr deta hai.
var num1 = "345.986"; var num2 = "345.98a6";
console.log(+num1 , +num2); 
console.log(Number(num1) , Number(num2)); 
console.log(parseInt(num1) , parseInt(num2)); 
console.log(parseFloat(num1) , parseFloat(num2)); 

//Decimal ki Length ko Control krne k liye
var num3 = 10 / 3;
console.log(num3.toFixed(2));

//Random Number OTP Generate
var heading = document.getElementById("randomHeading");
function GenerateOTP(){
    var random = Math.round(Math.random() * 10000);
    heading.innerText = random;
}

//Dice Number Game
var diceHeading = document.getElementById("diceHeading");
var diceInput = document.getElementById("diceInput");
var diceResult = document.getElementById("diceResult");

function diceCheck(){
    var userValue = diceInput.value;
    if (userValue < 7){
        var diceNumber = Math.ceil(Math.random() * 6);
        diceHeading.innerText = diceNumber;
        if (userValue == diceNumber){
            diceResult.innerText = "You Win";
            diceResult.style.color = "green";
        }else{
            diceResult.innerText = "You Lose";
            diceResult.style.color = "Red";
        }
    }else{
        diceResult.innerText = "Enter Number Less than 7"
        diceResult.style.color = "orange";
    }
}