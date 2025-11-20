declare global{
 interface Window{appVersion:string}

 type ApiResponse<T>={
    data:T;
    error?:string
 }
 type User={
   name:string;
   age:number
 }
}
export {}