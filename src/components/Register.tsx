"use client";

import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/navigation";
import {useState} from 'react'

export default function Register() {
  
      const name ='Register';
      const [username,setUsername] =useState('');
      const [password,setPassword] =useState('');
      const router  = useRouter ();
    
      const handleRegister = async () => {
       
        axios.post('/register', {
            username,
            password,
          }).then(res =>{
            alert(res.data.message)
            router.push('/login')
          }).catch (error=> {
            alert(error.response.data);
          })
      };
      return (
        <div className="text-white font-serif h-[100vh] flex justify-center items-center " >
        <div className='bg-slate-800 border-slate-500 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
         <h1 className='text-4xl text-white font-bold text-center mb-6'>{name}</h1>
          <section>
              <div className="relative my-4">
              <label htmlFor="Username" className=''>Email</label>
              <input value={username} onChange={(e) =>setUsername(e.target.value)}type="email" 
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" autoComplete='off'/>
              <span className='absolute top-4 right-4'><FaRegUser/></span>
              </div>
              <div className="relative my-4">
              <label htmlFor="Password" className=''>Password</label>
              <input value={password} onChange={(e) =>setPassword(e.target.value)} type="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"/>
              <span className='absolute top-4 right-4'><RiLockPasswordFill/></span>
              </div>
              <div className="relative my-4">
              <label htmlFor="Password" className=''>Confrim Password</label>
              <input value={password} onChange={(e) =>setPassword(e.target.value)} type="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"/>
              <span className='absolute top-4 right-4'><RiLockPasswordFill/></span>
              </div>
              <div >
                <input type="checkbox" />
                <label htmlFor=""> I accept all terms & conditions</label>
                  </div>
              <button onClick={handleRegister} className='w-full mb-4 text-[18px] mt-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-emerald-800 opacity-60 hover:opacity-100 font-bold py-2 transition-colors duration-300' type="submit">Register Here</button>
              
            </section>
            
            <div className="register-link">
            <span className='m-4'>Already have an account?</span><Link className='text-blue-600' href='login'>Login Now</Link>
            </div>
            </div>
        </div>
      )
    };
