import { dbConnect } from "@/lib/dbConnect"
import User from "@/model/User";
import {  NextResponse } from "next/server"

const passwordChangeHandler=async(req:Request)=>{
    await dbConnect();
    const body = await req.json()

    if (!body.newPassword) {
        return NextResponse.json({ message: "Missing newPassword field in the request body" });
    }
      
    const {id}=params;
    const {
        newPassword
    } = body;
    
    const user = await User.findOne({_id: id })
    if(!user){
        return NextResponse.json({message:"User not found!"})
    }

    user.password = newPassword;
    await user.save()

    NextResponse.json({
        message:"Password changed successfully",
        user
    })
}
export {
    passwordChangeHandler as PUT
}