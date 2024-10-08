import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <span className="logo">MyChat</span>
        <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}
