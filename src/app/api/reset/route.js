import { dbConnect } from "@/lib/dbConnect"
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server"

const loginHandler=async()=>{
    await dbConnect();
    const body = await NextRequest.json()
    const {
        username,
        password
    } = body
    
    if(!username || !password){
        return NextResponse.status(400).json("incorrect from submission");
    }
    const user = await User.findOne({username,password})
    if(!user){
        return NextResponse.status(400).json("wrong credentials")
    }
    NextResponse.json(user)
}
export {
    loginHandler as POST
}