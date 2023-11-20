import React from 'react';
import './MainBox.css';
import NavBar from './NavBar';
import Content from './Content';

const MainBox = () => {
  return <>
     <div className="MainBox">
        <NavBar />
        <Content />
     </div>
      </>
}

export default MainBox;