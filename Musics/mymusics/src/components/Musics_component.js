
//imported modeles and components...
import React from 'react';
import './Musics_component.css';
import Mysics from './Mysics';
import Songs from '../components/Songs';


//Musics_component function...
export default function Musics_component() {

  return (

//in this component, we have returned 1 information...
    <div className="Mysics-item">
      {Songs.map((song, index) => (
        <Mysics
          key={index}
          songName={song.SongName}
          Artist={song.artist}
          img={song.image}
          src={song.src}
          btn="./imges/play.png"
          playBtn={song.playBtn}
          pauseBtn={song.pauseBtn}
        />
      ))}
    </div>
  );
}
