//1.String Length Calculation
var text = "my name is Aziz"
console.log(text.length);

//2. String to Uppercase
console.log(text.toUpperCase());

//3. String to Lowercase
console.log(text.toLowerCase());

//4. Count Specific Character
var sentence = "Can you give me your email adress! , I will send you some queries on your email !, and I will also save your email adress !"
console.log(sentence.charAt(2));
for (var i = 0 ; i < sentence.length ; i++){
    if (sentence.charAt(i) === "!") {
        console.log(i);
        document.write("Exclamation point Founded")
        break;
    }
}

//5. Substring Extraction
console.log(text.substring(11,15));

//6. Capitalize Each Word
var words = sentence.split(" ")
for (var i = 0 ; i < words.length ; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
var capWords = words.join(" ");
console.log(capWords);

//7. Trim Whitespace
var spaceText = "  hello World   "
console.log(spaceText.length);
console.log(spaceText.trim().length);

//8. Count Vowels and Consonants
var sentences = "JavaScript is an excellent programming language"
var vowels = ["a" , "e" , "i" , "o" , "u"]
var vowelCount = 0;
var consCount = 0;

// for (var i = 0 ; i < sentences.length ; i++){
//     if (sentences[i].toLowerCase() === "a" || sentences[i].toLowerCase() === "e" || sentences[i].toLowerCase() === "i" || sentences[i].toLowerCase() === "o" || sentences[i].toLowerCase() === "u"){
//         vowelCount++;
//     }else if (sentences[i] !== " "){
//         consCount++;
//     }
// }
// console.log(vowelCount);
// console.log(consCount);

// Count Vowels via Nested Loop-->
for (let i = 0 ; i < sentences.length ; i++){
    var alphaMatched = false;

    for(var j = 0 ; j < vowels.length ; j++){
    
         if  (sentences[i].toLowerCase() === vowels[j]){
            alphaMatched = true;
            break;
        }
    }
    if (alphaMatched)vowelCount++;
if (!alphaMatched && sentence[i] !== " ") consCount++;
}
console.log("VowelCount-->" ,vowelCount);
console.log("ConstCount-->" ,consCount);




//9. Substring Extraction with Index
console.log(text.substring(3));

//10. Remove Dublucates
// var fruits = ["Apple" , "Banana" , "Chekku" , "Watermelon" , "Banana" , "Chekku"]

// var cities = ["karachi" , "quetta" , "chamman" , "islamabad" , "peshawar"]
// var userCity = prompt("Enter Your City")
// for (var i = 0 ; i < cities.length ; i++){
//     console.log(cities[i]);
//     if (cities[i] === userCity.toLowerCase()){
//         alert("City Matched")
//     }
// }

// var UserName = prompt("Enter Your Name")
// if (UserName.length < 3 || UserName.length > 12){
//     alert("Your name must be Greater than 3 and less than 12")
// }else{
//     console.log(UserName);
// }

//Replace
sentence = sentence.replace("email" , "LLL")
console.log(sentence);

//ChartAt
var numbOfE = 0;
for  ( var i = 0 ; i < sentence.length ; i++){
    if (sentence.charAt(i).toLowerCase() === "e" ) numbOfE++; 
}
console.log("Number Of E-->" , numbOfE);

//Q..>Password must include one Capital Letter ,1 Number ,1 Speacial character , min length should be 8
var capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var pasNumber = "123456789"
var spCharacter = "@#!$%&-_+*"
// var Password = prompt("Enter Password")
// if (Password === capLetter[i] && Password === pasNumber[i] && Password === spCharacter[i] && Password.length > 8 || Password.length < 12){
//     console.log(Password);
// }else {
//     alert ("Password must be 1 Capital Letter & 1 Number & 1 Special Character & more than 8 & less than 12")}

