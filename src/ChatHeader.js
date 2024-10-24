import React from 'react'
import "./ChatHeader2.css"
import { EditLocation, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@mui/icons-material'
function ChatHeader() {
  return (
    <div className='chatHeader'>
      <div className="chatHeader__left">
        <h3>
            <span className="chatHeader__hash">#</span>
        test channels
        </h3>
      </div>
      <div className="chatHeader__right">
        <Notifications />
        <EditLocation />
        <PeopleAltRounded />
        <div className="chatHeader__search">
            <input placeholder='search' />
            <SearchRounded />
        </div>
        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  )
}

export default ChatHeader
