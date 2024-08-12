import React from 'react'
import { Sidebar } from '../component/Sidebar'
import { Chat } from '../component/Chat'

export const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}
