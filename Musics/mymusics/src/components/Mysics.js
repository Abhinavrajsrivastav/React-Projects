import './Mysics.css';
import React, { useState, useRef } from 'react';
let audio = new Audio();

function Mysics(data) {
  const [isPlaying, setIsPlaying] = useState(false);
  let prevSong = new Audio();
  const playSong = () => {
   
    if(audio.duration > 0 && !audio.paused){
          audio.pause();
          audio.src = data.src;
          audio.play()
 
          console.log("hello");
    }
    else{
      audio.src = data.src;
      audio.play();

    }
  };

  return (
    <div className="Mysics">
      <img src={data.img} className="song-img" onClick={playSong} alt="Play" />
      <div>
        <h1>{data.songName}</h1>
        <h1>{data.Artist}</h1>
      </div>
    </div>
  );
}

export default Mysics;
