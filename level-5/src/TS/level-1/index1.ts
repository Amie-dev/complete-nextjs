/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// let a="aminul";
// a="amie";
// a=90 -->Give Error due to first initialize a is type is string but when you assain a is type is number this give error


let a:string;
a="am";


let b:number;
b=90;

let isOnline:boolean;
isOnline=true;

//array

let arr:number[];
arr=[90,9.12,3,33,45,54]

let arr1:string[];
arr1=["a","b","c","d"];

let arr2:Array<number>;





//tuple

let tuple:[number,string,boolean];
tuple=[90,"s",true]


//enum
enum Role {
    "User","admin"
}

//any
let any:unknown;
any="anja";

let any1; //type is any 

any1=90;
any1="am";

//void

function fun(num1:number,num2:string){
     
}

// fun("string",90); //error
fun(90,"dd")

//rtuen type

function fun1 (num1:number,num2:string):number{
    // return "ss"
     return 90
}

//defualt params

function fun2 (num1:number,num2:string="anc"):number{
    // return "ss"
     return 90
}
fun2(23)


//void
function fun3 (num1:number,num2:string="anc"):void{
    //not return 
}
fun2(23)