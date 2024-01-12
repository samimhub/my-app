import { NextRequest, NextResponse } from "next/server"
import User from '@/model/User'
import {dbConnect} from "@/lib/dbConnect";

 
const registerHandler=async()=>{
    await dbConnect();
    try{
    const body = await NextRequest.json();
    const {
        username,
        password
    } = body
    if(!username || !password) {
        return NextResponse.json({ message: "incorrect form submission" })
    }
    const user = await User.findOne({ username })
    if (user) {
        return NextResponse.json({message: "User already exists"}) 
    }

    const newUser = await User.create({
        username,
        password
    })

    return NextResponse.json({
        message:'User registered Successfully',
        user:newUser
    })
}catch(error){
    console.error('error processing registration',error)
    return NextResponse.json({message:'Internal srever error'});
}
    
}
export { 
    registerHandler as POST
}