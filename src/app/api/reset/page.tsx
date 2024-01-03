"use client";

import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/navigation";
import {useState} from 'react'

function Reset() {
    const name ='Reset Password';
    const [password,setPassword] =useState('');
    const router=useRouter();

    const handleChangePassword =async()=>{
      axios.post('http://localhost:8000/Reset',{
        password,
      }).then(res=>{
        alert(res.data.massage);
        router.push('/login');
      }).catch(error=>{
        alert(error.response.data)
      })
    }

  return (
    <div >
    <div className='bg-slate-800 border-slate-500 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
     <h2 className='text-4xl text-white font-bold text-center mb-6'>{name}</h2>
      <section>
          <div className="relative my-4">
          <label htmlFor="Password" className=''>New Password</label>
          <input value={password} onChange={(e) =>setPassword(e.target.value)} type="password"
          className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"/>
          <span className='absolute top-4 right-4'><RiLockPasswordFill/></span>
          </div>
          <div className="relative my-4">
          <label htmlFor="Password" className=''>ConfrimPassword</label>
          <input value={password} onChange={(e) =>setPassword  (e.target.value)} type="password"
          className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"/>
          <span className='absolute top-4 right-4'><RiLockPasswordFill/></span>
          </div>
          <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
              </div>
          </div>
          <button onClick={handleChangePassword} className='w-full mb-4 text-center text-[18px] mt-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-emerald-800 opacity-60 hover:opacity-100 font-bold py-2 transition-colors duration-300' type="submit">Reset</button>
        </section>
        </div>
    </div>
  )
};
export default Reset
