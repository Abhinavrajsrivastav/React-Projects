import React from 'react';
import './Content.css';
import SideBar from './SideBar';
import SongCard from './SongCard';

const Content = () => {
  return <>
    <div className="content">
        <SideBar />
        <SongCard/>
    </div>
  </>
}

export default Content;
