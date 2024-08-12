import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

export const Login = () => {

  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    }catch(err) {
      setErr(true)
      console.log(err)
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>MyChat</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button>Sign in</button>
            </form>
            {err && <span>Something went wrong</span>}
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}
