import React from 'react';
import './App2.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { selectUser } from "./features/userSlice";
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
function App() {
  const user = useSelector(selectUser);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className="App">
      
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
