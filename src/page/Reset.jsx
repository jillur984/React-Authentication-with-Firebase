
import { useState } from 'react'
import { sendPasswordReset } from '../firebase'
import { NavLink } from 'react-router-dom'


const Reset = () => {
  const[email,setEmail]=useState("")
  return (
    <div className='flex flex-col items-center justify-center p-4'>
    <div >
      <h1 className='text-3xl my-2'>Reset your Password</h1>
    </div>
    <div>
      <input
      type='email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder='Enter Email Address'
      className="mx-2 my-2 p-1 border border-gray-400 rounded-sm"
      />
      <button className="bg-black text-white p-1 rounded-md mx-2" onClick={sendPasswordReset(email)}>Send to reset Password</button>
    </div>
    <p>Dont have an Accout ?
      <NavLink className="border rounded-sm bg-black p-1 m-1 text-white" to="/registration">Register</NavLink>
    </p>
    </div>
  )
}

export default Reset