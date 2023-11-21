import React from 'react';
import './Content.css';

const Content = ({
  setLibrary,
  Library
}) => {
  return <>
   <div className="content">
    <div className="content-Box">
      <img src={'./imges/ai.jpg'} alt="" />
      <h3>Artificial Intelligence</h3>
      <audio controls>
        <source src ={'./imges/BOL_DO_NA_ZARA_Full_Video_Song_AZ_(getmp3.pro).mp3'} type="audio/mp3" />
      </audio>
   </div>
   </div>
  </>
}

export default Content;
