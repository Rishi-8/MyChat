import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

export const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const ref = useRef()

  const handleDate = (date) => {
    const currDate = new Date()
    const messageTime = new Date(date * 1000);
    const diffHours = (currDate.getTime() - messageTime.getTime()) / 3600000
    if(diffHours < 1){
      const absMinutes = Math.floor(diffHours * 60)
      if(absMinutes > 0) {
        return `${absMinutes}m ago`
      }
      else{
        return "just now"
      }
    }
    return `${messageTime.getHours()}:${messageTime.getSeconds()}`
  }

  useEffect(() => {
    ref.current?.scrollIntoView({behaviour: "smooth"})
  }, [message])

  return (
    <div ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
        <div className="messageInfo">
            <img 
              src={
                message.senderId === currentUser.uid
                  ? currentUser.photoURL
                  : data.user.photoURL
              }
              alt="" 
            />
            <span>{handleDate(message.date.seconds)}</span>
        </div>
        <div className="messageContent">
            {message.text && <p>{message.text}</p>}
            {message.img && <img src={message.img} alt="" />}
        </div>
    </div>
  )
}
