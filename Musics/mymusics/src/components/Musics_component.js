
//imported modeles and components...

import React, { useState } from 'react';
import './Musics_component.css';
import Mysics from './Mysics';
import Songs from '../components/Songs' ;



//Musics_component function...

export default function Musics_component(props){
//clickedBtn use state...
 function muToMc(songImg,songName){
   props.musicsComponentToApp(songImg,songName);
  }

  return (

//in this component, we have returned 1 information...
//Map function is used to return multiple information...
    <div className="Mysics-item">
      {Songs.map((song) => (
        <Mysics 
          index={song.id}
          songName={song.SongName}
          Artist={song.artist}
          img={song.image}
          src={song.src}
          btn={song.btn}
          playBtn={song.playBtn}
          pauseBtn={song.pauseBtn}
          array={Songs}
          musicsToMc = {muToMc}
        />
      ))}
    </div>
  );
}
