//Array-->

// var cities = ["Karachi" , "Islamabad" , "Quetta" , "Peshawar"]
// console.log(cities[0])

// cities[0] = "The City of Light"
// console.log("city-->" , cities[0])

// index , variable ke naam ke baad [] brackets aenge , square brackets mein index ka number likh denge

// length
// show single value
// update single value


// methods
// push , add 1 or more element in the last of an array
// pop , remove one element from last of an array
// unshift , add 1 or more element in the start of an array
// shift , remove one element from start of an array


//1. Push
// cities.push("Swat" , "Charsadda" , "Mardan");
// console.log("cities after push-->" , cities);

//2. Pop
// cities.pop();
// console.log("cities after Pop-->" , cities);

//3. Unshift
// cities.unshift("Hyderabad" , "Larkana" , "Sukkur");
// console.log("cities after Unshift-->" , cities);

//4. Shift
// cities.shift()
// console.log("cities after Shift-->" , cities);

// var length = cities.length;
// console.log(length);

// cities.length = 1
// console.log(cities);

// console.log(cities[cities.length - 1])


// var food = ["Apple" , "Banana" , "Cherry" , "papaya"]

//5. Splice
// splice original array ko update krta he

//splice ka method 3 paramaters
//1. index number (jahan se hamen add ya remove krna he)
//2. kitne items remove krne hen
//3. jo items hamen add krne hen

//only add
// food.splice(2 , 0 , "PineApple")
// console.log("after Splice Add-->" , food);

//only remove
// food.splice(1 , 1)
// console.log("after Splice Remove" , food);

//add and remove
// food.splice(2 , 1 , "WaterMelon" , "Stawbarry" , "Kewi")
// console.log("after Splice Add & Remove" , food);


//6. Slice
// array se elements ko copy krne ke lye
// slice original array mein koi change nahn krta
// slice copy krke new array return krdeta hun
// slice ke 2 paramaters he
// 1.kahan se copy krna start krna he
// 2.jahan tk copy krna he us se aik number zyada dete hen

// var copy = food.slice(2 , 5)
// console.log("after Slice Copy-->" , copy)

// var copyAll = food.slice(1)
// console.log("After Slice CopyAll" , copyAll)


//7. .indexOf

// var student = [100 , 101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109 , 110]
// var studentRollNum = +prompt("Enter Roll Number")

// var studentRollNumInd = student.indexOf(studentRollNum)
// // console.log(studentRollNumInd);

// if(studentRollNumInd === -1){
//     console.log("Not Allowed");
// }else{
//     console.log("Allowed");
// }

// agr city hamari list mein he to usko already added ka msg show
// or agr nahn he to usko add krdo
// var city = ["Karachi" , "Quetta" , "Islamabad" , "Peshawar"]
// var yourCity = prompt("Enter City")
// var indexOfCity = city.indexOf(yourCity)

// if(indexOfCity === -1){
//     city.push(yourCity)
// }else{
//     alert   ("Already Added");
// }

// var yourCity1 = prompt("Enter City");
// var indexOfCity = city.indexOf(yourCity1);

// if(indexOfCity === -1){
//     city.push(yourCity1)
// }else{
//     alert("Already Added");
// }

// console.log(city);


//8. For Loop
//(1).variable banate hen
//(2).condition
//(3).increment ya decrement

for (var i = 1 ; i => 10 ; i++) {
    console.log(i);
}