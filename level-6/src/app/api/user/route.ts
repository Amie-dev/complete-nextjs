import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    
    return NextResponse.json({
        name:"Amie",
        age:21
    },{
        status:200
    })
}

export async function POST(request:NextRequest) {
    const {name,age} =await request.json()

    return NextResponse.json({
        name,
        age
    },{
        status:201
    })
}