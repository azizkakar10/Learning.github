//1.variable banate hen
//2.condition
//3.increment ya decrement

//simple loop
// for (var i = 1; i <= 10; i++) {
//   console.log("Hello " + i);
// }

//print numbers from 1 to 10
// for (var i = 1 ; i <= 10 ; i++){
//     console.log(i)
// }

//print Even numbers from 1 to 20
// for (var i = 0 ; i <= 20 ; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

//Print Odd numbers from 1 to 15
// for (var i = 1 ; i <= 15 ; i++){
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }

//print the Squares of a number from 1 to 10
// for (var i = 1 ; i <= 10 ; i++){
//     console.log(i * i);
// }

// print the factorial of a number 5
// for (var i = 1 ; i < 5 ; i++){
//     console.log(5 - i);
// }

// print the multiplication table of a number (let's say 7) up to 10.
// for (var i = 1 ; i <= 15 ; i++){
//     console.log(7 * i);
// }

// print the Fibonacci series up to the 10th term
// var num = 0
// for (var i = 0 ; i <= 10 ; i++){
//     console.log("num-->" , num , "i-->" , i);
//     num = num + i 
//     console.log(num);
// }

///9,8,7,6,5,4,3,2,1
// for (var i = 0 ; i < 10 ; i++){
//     console.log(9 - i);
// }

///19,28,37,46,55,64,73,82,91
// for (var i = 1 ; i < 10 ; i++){
//     console.log(i ,10 - i);
// }

//print the largest element in an array (let's say [3, 7, 2, 9, 5, 4, 1]).
// var nums = [3, 7, 2, 9, 5, 4, 1];
// var largestNum = 0;
// for (var i = 0 ; i <= nums.length ; i++){
//     console.log("index-->" , i ,
//     "Array Value-->" , nums[i] ,
//     "lagest Num-->" , largestNum ,
//     "Condition-->" , nums[i] > largestNum
//     );
//     if(nums[i] > largestNum){
//         largestNum = nums[i]  
//     }
// }
// console.log(largestNum);


// var bond = [1111 , 1112 , 1113 , 1114 , 1115 , 1116 , 1117 , 1118 , 1119 , 1120 , 1121 , 1122 , 1123 , 1124 , 1125 , 1126 , 1127 , 1128 , 1129 , 1130 , 1131 , 1132 , 1133 , 1134 , 1135]
// var bondNumber = prompt("Enter Number")
// var winner = false
// for (i = 0 ; i < bond.length ; i++){
//     console.log(bond[i] , "index num-->" , i);
//     if (bond[i] == bondNumber) {
//         winner = true;
//         break;
//     }
// }
// if (winner) {
//     document.write("You win")
    
// }else{
//     document.write("You Lose")
// }


var karachiAreas = ["malir" , "safoora" , "johar" , "landhi" , "korangi" , "banaras"]
var userArea = prompt("Enter Your Area")
var available = false
for (i = 0 ; i < karachiAreas.length ; i++){
    if (karachiAreas[i] == userArea) {
        available = true
        document.write("Delivery Available")
        break;
    }
}
if (!available){
    document.write("Delivery Not Available")
}