import React from 'react'
import "./Chat.css"
import ChatHeader from './ChatHeader'
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className="chat__message">

      </div>
      <div className="chat__input">
        <AddCircle fontSize='large' />
        <form>
          <input placeholder={'#chatinput TESTCHANNEL'} />
          <button className='chatInput__button'>Send Message
          </button>
        </form>
        <div className="chatInputIcon">
          <CardGiftcard />
          <Gif />
          <EmojiEmotions/>

        </div>
      </div>
    </div>
  )
}
export default Chat
