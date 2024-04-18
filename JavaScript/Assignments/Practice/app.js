//Splice
var arr = [1, 2, 3, 4, 5]
arr.splice(1 , 1);
console.log(arr);

var fruits = ["Apple" , "Banana" , "Orange" , "Kiwi" , "Grape"]
fruits.splice(2 , 2 , "Stawberry" , "Pineapple")
console.log(fruits);

//Slice
var colors = ["Red" , "Green" , "Blue" , "Yellow" , "Purpule"]
var colorCopy = colors.slice(1 , 3);
console.log(colorCopy);

var fruit = ["Apple" , "Banana" , "Cherry" , "Date" , "Fig"]
var fruitCopy = fruit.slice(2 , 4);
console.log(fruitCopy);

var numbers = [10 , 20 , 30 , 40 , 50]
var numberCopy = numbers.slice(3);
console.log(numberCopy);

//For Loop
var num1 = [5 , 6 , 3 , 8 , 7]
var lowestNum1 = 10;
for (var i = 0 ; i < num1.length ; i++){
    if (num1[i] < lowestNum1){
lowestNum1 = num1[i]
    }
}
console.log(lowestNum1); 

var numAdd = [3 , 6 , 9 , 12 , 15]
var numAddSum = 0;
for( var i = 0 ; i < numAdd.length ; i++){
   // console.log("index-->" , i , "numAdd-->" , numAdd[i] , "Sum-->" , numAddSum);
    numAddSum = numAdd[i] + numAddSum
}
console.log(numAddSum);

var colours = ["Red" , "Green" , "Blue" , "Yellow" , "Pink" , "Black" , "White"]
for(var i = 0 ; i < colours.length ; i++){
    document.write(colours[i] , "<br>");
}

var prices = [25 ,30 , 15 , 10 , 50]
var highestPrice = 0;
for (var i = 0 ; i < prices.length ; i++){
    if(prices[i] > highestPrice){
        highestPrice = prices[i]
    }
}
console.log(highestPrice);

var animals = ["Cat" , "Dog" , "elephant" , "Giraffe" , "Lion"]
for (var i = 0 ; i < animals.length ; i++){
    console.log(animals[i]+"s");
}