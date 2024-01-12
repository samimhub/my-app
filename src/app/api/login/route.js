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
        return NextResponse.json({ error: "incorrect form submission" })
    }
    const user = await User.findOne({username,password})
    if(!user){
        return NextResponse.json({ error: "wrong credentials" })
    }
    NextResponse.json(user)
}
export {
    loginHandler as POST
}