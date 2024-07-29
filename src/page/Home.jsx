import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from 'firebase/auth';

const Home = () => {
  const navigate=useNavigate()
  const[user,loading,error]=useAuthState(auth)
  const handleLogout=()=>{
   signOut(auth).then(()=>{
   navigate("/login")
   console.log("Sign Out")
   }).catch((error)=>{
    console.error(error)
   })
  }
  if (loading) return <p> User info loading....</p>
  return (
    <div>
     <div>Welcome to {user.email}</div>
     <button className='text-2xl border rounded-md bg-black text-white'  onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home