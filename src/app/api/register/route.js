import { NextRequest, NextResponse } from "next/server"
import User from '@/model/User'
import {dbConnect} from "@/lib/dbConnect";

 
const registerHandler=async()=>{
    await dbConnect();
    const body = await NextRequest.json()
    const {
        username,
        password
    } = body
    if(!username || !password) {
        return NextResponse.status(400).json("incorrect form submission")
    }

    const user = await User.findOne({ username })
    if (user) {
        return NextResponse.status(400).json("user already exists")
    }

    const newUser = await User.create({
        username,
        password
    })
    user.save(); 
    return NextResponse.json({
        message:'User registered Successfully',
        user:newUser
    })
    
}
export {
    registerHandler as GET,
    registerHandler as POST
}