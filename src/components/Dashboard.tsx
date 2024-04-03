'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


function Dashboard() {
  const router=useRouter();

  const handleLogout=()=>{
   localStorage.clear()
      router.push('/login');
    }
    const checkLogin = () => {
      const userString =localStorage.getItem('user');
      if(!userString){
        alert("User not found!")
        router.push('/login');
        return;
      }
      const user = JSON.parse(userString);
      if(user){
        alert(`User Id is ${user.user._id}`)
      }

    }
  
  useEffect(()=>{
    checkLogin();
  },[]);

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      
      <button onClick={handleLogout} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Logout</button>
    
      <button onClick={checkLogin} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>checkLogin</button>
    </div>
  )
  }

export default Dashboard;
