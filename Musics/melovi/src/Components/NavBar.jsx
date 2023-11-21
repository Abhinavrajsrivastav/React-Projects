import React, {useState} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlay,
//   faPause,
//   faAngleLeft,
//   faAngleRight,
// } from "@fortawesome/free-solid-svg-icons";
import './NavBar.css';

const NavBar = ({
  setLibrary,
  Library,
}) => {
  return <>
       <div className="navBar">
        <button onClick={()=>setLibrary(!Library)}>Library</button>
       </div>
  </>
}

export default NavBar;
