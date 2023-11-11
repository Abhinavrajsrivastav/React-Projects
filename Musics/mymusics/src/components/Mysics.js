// Date: 2021/8/29

//imported modules...
import './Mysics.css';
import React, { useState, useRef } from 'react';
import Songs from "./Songs";

let audio = new Audio();
let prevData = new Object();

//Mysics component...
  function Mysics(data) {
//is Playinf use state...
  const [isPlaying, setIsPlaying] = useState(false);

  const [clickedBtn, setClickedBtn] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

//playSong function...
//3 tasks are need to be performed in this function...but only one have done...
  const playSong = () => {
  if (isPlaying) {
    audio.pause();
    Songs[clickedBtn].btn= "./imges/play.png";
    audio.src = data.src;
    audio.play();
  } else {
    audio.src = data.src;
    audio.play();
    setClickedBtn(data.index);
  }

  setIsPlaying(!isPlaying);
};


//return statement...
  return (
    <div className="Mysics">
      <div>
        <img src={data.img} className="song-img" alt="Play" />
        <img
          src={isPlaying ? data.pauseBtn : data.playBtn}
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