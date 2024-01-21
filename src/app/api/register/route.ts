import { dbConnect } from "@/lib/dbConnect"
import User from "@/model/User";
import { NextResponse } from "next/server"

 const registerHandler=async(req:Request)=>{
    await dbConnect();
    try{
      const body = await req.json();
         const {
               username,
               password
         }=body;
         if(!username || !password ){
            return NextResponse.json({message:"Incorrect from submission"})
         }
         const user = await User.findOne({username})
         if(user){
            return NextResponse.json({message:"User already exists"})
         }  
         
         const newUser = await User.create({
            username,
            password
         })

         return NextResponse.json({
            message:"User register Succesfully",
            user:newUser
         })
    }catch(error){
         console.error('error processing registration',error)
         return NextResponse.json({message:"Internal server error"});
    }
 }
 export{
    registerHandler as POST,
    registerHandler as GET
 }