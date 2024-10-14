result = 0;
function chal(a , b){
console.log(a + b);
return  a + b;
}



result = chal(3 , 4);
console.log(result);


var arr = [1,2,3,4,5,6,7,8,9,10]
var even = arr.filter((data) => data % 2 == 0)
var odd = arr.filter((data) => data % 2 == 1)
console.log(even);
console.log(odd);

var found = arr.includes(5);
console.log(found);