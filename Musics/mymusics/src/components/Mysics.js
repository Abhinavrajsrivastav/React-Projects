// Date: 2021/8/29

//imported modules...
import './Mysics.css';
import React, { useState, useRef } from 'react';
let audio = new Audio();

//Mysics component...
  function Mysics(data) {
  const [isPlaying, setIsPlaying] = useState(false);

//playSong function...
//3 tasks are need to be performed in this function...but only one have done...
  const playSong = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.src = data.src;
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

//return statement...
  return (
    <div className="Mysics">
      <div>
        <img src={data.img} className="song-img" alt="Play" />
        <img
          src={data.btn}
          className="play-icon"
          onClick={playSong}
          alt="Play Icon"
        />
      </div>
      <div>
        <h1>{data.songName}</h1>
      </div>
    </div>
  );
}

//export statement...
export default Mysics;