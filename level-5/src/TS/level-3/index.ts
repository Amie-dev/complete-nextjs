//generic

function hello<T>(a:T,b:T){
 
}

hello(21,34)
hello<number>(21,34)
// hello(21,"ss")

interface User<T>{
    name:string,
    age:T
}

let user:User<number>={
    name:"AN",
    age:21
}