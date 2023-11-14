// Date: 2021/8/29

//imported modules...
import './Mysics.css';
import React, { useState } from 'react';
import Songs from "./Songs";

let audio = new Audio();
let index = 0;

//Mysics component...
  function Mysics(data) {
//is Playinf use state...
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicsBtn, setMusicsBtn] = useState(data.btn);

//playSong function...
//3 tasks are need to be performed in this function...but only one have done...
  const playSong = () => {
  if (isPlaying) {
    setMusicsBtn(data.playBtn);
    audio.pause();
    // audio.play();

  }
   else {
    index = data.index;
    audio.src = data.src;
    audio.play();
    setMusicsBtn(data.pauseBtn);
  }

  setIsPlaying(!isPlaying);
};


//return statement...
  return (
    <div className="Mysics">
      <div>
        <img src={data.img} className="song-img" alt="Play" />
        <img
          src={musicsBtn}
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