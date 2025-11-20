/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// type inference

let a=90; //type number

// type annotations;
let b:number;


//custom type
type amie=number | string

let a1:amie;

a1=90

type status="success" | "error" | "pending";

let st1:status;
st1="success"



//object
type obj={
    name:string,
    age:number,
    roll:number
}

let obj1:obj={
    name:"name",
    age:21,
    roll:99
}

//optional obj key ?

type post={
    description:string,
    image?:string,
    likes:boolean
}

let post1:post={
    description:"jhh",
    // image:"jhsd",
    likes:true
}

// combine
type a1={
    a:string
}
type a2={
    b=string
}

type a1a2=a1 & a2

let obj12:a1a2={
    a=""
}
// union , intersaction 

// custo functions

type MathFn=(a:number,b:number)=>number;

let add:MathFn=(a,b)=>{
    
    return a+b
}

// Interfaces


interface post1{
    description:string,
    image?:string,
    likes:boolean
}


//combin 
// extend
interface post31 extends post1{
    sub:number
}