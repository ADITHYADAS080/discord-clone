import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'
function Message() {
  return (
    <div className='message'>
      <Avatar />
        <div className="message_info">
            <h4>
                das
                <span className='message_timestamp'> time stamp</span>
            </h4>
            <p>this is a message</p>
        </div>
    </div>
  )
}

export default Message
