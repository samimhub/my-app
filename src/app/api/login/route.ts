import { dbConnect } from "@/lib/dbConnect"
import User from "@/model/User";
import { NextResponse } from "next/server"

const loginHandler=async(req: Request)=>{
    await dbConnect();
    try{
    const body = await req.json();
    const {
        username,
        password
    } = body;
    
    if(!username || !password){
        return NextResponse.json({ message: "incorrect form submission" })
    }
    const user = await User.findOne({username,password})
    if(!user){
        return NextResponse.json({ message: "wrong credentials" })
    }
    if(user){
        return NextResponse.json({ message: "Login Succesfully" ,success:true,user})
    }
    NextResponse.json(user)

}catch(error){
    console.error('error processing registration',error)
    return NextResponse.json({message:"Internal server error"});

}
}
export {
    loginHandler as POST
}