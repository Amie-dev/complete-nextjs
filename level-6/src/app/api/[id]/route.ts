import { NextRequest, NextResponse } from "next/server";
interface paramsType{
    params:{
        id:string
    }
}

export async function GET(request:NextRequest,{params}:paramsType) {
    const {id}=await params;

    return NextResponse.json({
        postId:id
    },{
        status:200
    })
}