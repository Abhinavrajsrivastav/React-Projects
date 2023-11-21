import React from 'react';
import './MainBox.css';
import NavBar from './NavBar';
import Content from './Content';

const MainBox = ({
   setLibrary,
   Library
}) => {
  return <>
     <div className={`MainBox${Library?"-Open":""}`}>
        <NavBar setLibrary={setLibrary} Library={Library}/>
        <Content setLibrary={setLibrary} Library={Library} />
     </div>
      </>
}

export default MainBox;