import { NextResponse } from "next/server"

const loginHandler=()=>{
    return NextResponse.json({
        message:'hello world'
    })
    
}
export {
    loginHandler as GET,
    loginHandler as POST
}