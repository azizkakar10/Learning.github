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

// Object Adding, Deleting , Function
var obj = {
    name: "Aziz Ur Rehman",
    fatherName: "Abdullah",
    age:"01-03-1997",
    class: "Web Development",
    isMerried: true,
    getAge: function(){
        var now = new Date();
        var dob = new Date(obj.date);
        console.log(dob);
        var age = now.getFullYear() - dob.getFullYear();
        return age;
    },
    date: "01-03-1997,"
}
delete obj.age
console.log(obj);
console.log(obj.getAge());
obj.batch = "Batch-11"

//Constructor Object
function AllStudent(nam, fnam, rno, btch){
    this.name = nam;
    this.fatherName = fnam;
    this.rollNo = rno;
    this.batchNo = btch;
    this.isMarried = true
}
AllStudent.prototype.isStudent = true;

var student1 = new AllStudent("Aziz Ur Rehman", "Abdullah", "210", "11")
var student2 = new AllStudent("Bila", "Raza", "222", "12")
var student3 = new AllStudent("Khalid", "Nisar", "320", "13")
var student4 = new AllStudent("Zubair", "Bacha Agha", "410", "14")
var student5 = new AllStudent("Muzammil", "Parid", "430", "15")

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);