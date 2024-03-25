// var firstName = 'Aziz'
// var lastName = 'Ur Rehman'

// var fullName = firstName + ' ' + lastName

// document.write('<h1>' + 'Salaam ' + fullName  + '</h1>')
// document.write(`<h1> Salaam ${fullName} </h1>`)

// Template Strings 
// ye use krte hen  Back-Tics ``

// var fName = `Salaam ${firstName} ${lastName}`

// var tableNumber = 4
// var tNum = 11
// var tdNum = 11

// document.write(`<h5> ${tableNumber} Ka Table </h5>`)
// document.write(`<li> ${tableNumber} x ${tdNum} =  ${tableNumber * tNum} </li>`)
// document.write(`<li> ${tableNumber} x ${++tdNum} =  ${tableNumber * ++tNum} </li>`)
// document.write(`<li> ${tableNumber} x ${++tdNum} =  ${tableNumber * ++tNum} </li>`)
// document.write(`<li> ${tableNumber} x ${++tdNum} =  ${tableNumber * ++tNum} </li>`)
// document.write(`<li> ${tableNumber} x ${++tdNum} =  ${tableNumber * ++tNum} </li>`)
// document.write(`<li> ${tableNumber} x ${++tdNum} =  ${tableNumber * ++tNum} </li>`)
// document.write(`<li> ${tableNumber} x ${++tdNum} =  ${tableNumber * ++tNum} </li>`)
// document.write(`<li> ${tableNumber} x ${++tdNum} =  ${tableNumber * ++tNum} </li>`)
// document.write(`<li> ${tableNumber} x ${++tdNum} =  ${tableNumber * ++tNum} </li>`)
// document.write(`<li> ${tableNumber} x ${++tdNum} =  ${tableNumber * ++tNum} </li>`)


var Num1 = +prompt("Enter a Number")
var Num2 = +prompt("Enter a Number")
var Num3 = +prompt("Enter a Number")

if((Num1 + Num2 + Num3) / 3){
    document.write(Num1)
}else if(Num2 < Num3){
    document.write(Num2)
}else{
    document.write(Num3)
}