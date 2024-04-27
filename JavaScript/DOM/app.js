// Object
var Car ={
    name : "Civic",
    Model : 2023,
    colour : "Black",
    type : "Sedan"
}

// DOM (Document Object Model) 

var h1 = document.getElementById("heading")
console.log(h1);

h1.innerText = "We are learning DOM"


var userData = document.getElementById("userData");
console.log(userData);
//function
function submit(){
console.log(userData.value);
userData.value = ""
}


var box = document.getElementById("upper")
console.log(box.style);

function yellow(){
box.style.backgroundColor = "yellow";
}
function black(){
    box.style.backgroundColor = "black"
}
function red(){
    box.style.backgroundColor = "red"
}
function green(){
    box.style.backgroundColor = "green"
}
function orange(){
    box.style.backgroundColor = "orange"
}
function blue(){
    box.style.backgroundColor = "blue"
}

var userText = document.getElementById("userText")
var countHeading = document.getElementById("counterHed")
console.log(userText);
function count(){
    words = userText.value
    totalWords = words.split(" ").length
    totalLetters = words.length
    countHeading.innerText = "Total Words="+totalWords +" "+"Total Letters=" + totalLetters
}

input1 = document.getElementById("userInput1")
input2 = document.getElementById("userInput2")
para = document.getElementById("para")
function replace(){
    result = para.innerText
    userInput1 = input1.value
    userInput2 = input2.value
    
    result = result.replace(userInput1 , userInput2)
    para.innerText = result
}