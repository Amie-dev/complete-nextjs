import mongoose from "mongoose";


interface Iuser{
    _id?:mongoose.Types.ObjectId;
    name?:string;
    password?:string;
    email:string;
    image?:string;
    createdAt?:Date;
    updatedAt?:Date

}



const userSchema=new mongoose.Schema<Iuser>({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
    },
    password:{
        type:String,
        // required:true
    }
},
{
    timestamps:true
})

const User=mongoose.models?.User ||  mongoose.model("User",userSchema);

//behind mongodb
//mongoose.model={Users:userSchema}

export default User