import React from 'react'
import './Sidebar.css';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Add from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAlt from '@mui/icons-material/SignalCellularAlt';
import Info from '@mui/icons-material/Info';
import Call from '@mui/icons-material/Call';
import Mic from '@mui/icons-material/Mic';
import Headphones from '@mui/icons-material/Headphones';
import Settings from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import imgg from "../src/1.jpg"

function Sidebar() {
  return (
    <div className="Sidebar">

      <div className="Sidebar__top">
        <h3>Programming Servers</h3>
        <ExpandMore />
      </div>
      <div className="Sidebar__channels">
        <div className="Sidebar__channelsHeader">
          <div className="Sidebar__header">
            <ExpandMore />
            <h4>Text Channels </h4>

          </div>
          <Add className="Sidebar__addchannels" />
        </div> 
        <div className="sidebar__channelList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__Voice">
        <SignalCellularAlt
        className='sidebar__VoiceIcon'
        fontSize='large'
        /> 
        <div className="sidebar__VoiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__VoiceIcons">
          <Info />
          <Call />
        </div>
      </div>
      <div className="sidebar__Profile">
        <Avatar src={imgg}/>
        <div className="sidebar__ProfileInfo">
          <h3>@name</h3>
          <p>#ThisIsMyID</p>
        </div>
        <div className="sidebar__ProfileIcon">
          <Mic />
          <Headphones />
          <Settings />
        </div>
      </div>
    </div>
  )
}
// import './Sidebar.css'; className="Sidebar"
export default Sidebar
