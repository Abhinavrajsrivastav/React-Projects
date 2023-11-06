import React from 'react';
import './Musics_component.css';
import Mysics from './Mysics';
import Songs from '../components/Songs';



export default function Musics_component() {

  return (
    <div className="Mysics-item">
      {Songs.map((song, index) => (
        <Mysics
          key={index}
          songName={song.SongName}
          Artist={song.artist}
          img={song.image}
          src={song.src}
        />
      ))}
    </div>
  );
}
