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
    const user = await User.create({
        username,
        password
    })
    return NextResponse.json({
        message:'hello world',
        user
    })
    
}
export {
    registerHandler as GET,
    registerHandler as POST
}