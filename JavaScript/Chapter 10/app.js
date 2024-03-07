var tableNumber = prompt ('Please Enter TableNumber')
var tNum = 1

document.write (`<h1> Table </h1>`)
document.write (`<li>${tableNumber} x 1 = ${tableNumber * tNum++} </li>`)
document.write (`<li>${tableNumber} x 2 = ${tableNumber * tNum++} </li>`)
document.write (`<li>${tableNumber} x 3 = ${tableNumber * tNum++} </li>`)
document.write (`<li>${tableNumber} x 4 = ${tableNumber * tNum++} </li>`)
document.write (`<li>${tableNumber} x 5 = ${tableNumber * tNum++} </li>`)
document.write (`<li>${tableNumber} x 6 = ${tableNumber * tNum++} </li>`)
document.write (`<li>${tableNumber} x 7 = ${tableNumber * tNum++} </li>`)
document.write (`<li>${tableNumber} x 8 = ${tableNumber * tNum++} </li>`)
document.write (`<li>${tableNumber} x 9 = ${tableNumber * tNum++} </li>`)
document.write (`<li>${tableNumber} x 10 = ${tableNumber * tNum++} </li>`)

if (10 === '10'){
    console.log('condition true')
}
else{
    console.log('condition False')
}

var num = prompt('Enter Your Number')
if(num % 2 == 0){
    document.write(`<h1> ${num} is even </h1>`)
}
else{
    document.write(`<h1>${num} is odd</h1>`)
}

var age = prompt('User Age')
if(age >= 18){
    console.log ('You Are Adult')
}
else(
    console.log('You are not Adult')
)

var city = prompt('Enter Your City')
if (city === "karachi"){
    console.log('Valid')
}
else if(city === "quetta"){
    console.log('Valid')
}
else{
    console.log('Not Valid')
}

// && use krte heen ke sari condition match honi chahiye
var age = prompt('Enter Age')
var userName = prompt('Enter UserName')
if(age > 12 && age < 18 && userName){
    console.log('Boy')
}
else{
    console.log('invalid')
}

var username = prompt('Enter Username')
var email = prompt('Enter Email')
var password = prompt('Enter Password')

if(username || email || password){
    console.log('username , email , password')
}
else{
    console.log('invalid')
}