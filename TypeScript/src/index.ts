let userName : string = "Aziz Ur Rehman";
let userAge : number = 28;
let userIsMarried : boolean = true;
let favSubjects : Array<string> = ["Math" , "English" , "Islamiat"]
let favNums : Array<string | number> = ['zero' , 1 , 'two' , 3 , '4']

interface User {
    userName : string ;
    userAge : number ;
    userCNIC ?: number
    userIsMarried : boolean ;
    favSubjectd : Array<string> ;
    favNums : Array<string | number> ;
}

let userInfo : User ={
userName : "Aziz Ur Rehman" ,
userAge : 28 ,
userIsMarried : true ,
favSubjectd : ["Math" , "English" , "Islamiat"],
favNums : ['zero' , 1 , 'two' , 3 , '4']
}

console.log(userInfo);