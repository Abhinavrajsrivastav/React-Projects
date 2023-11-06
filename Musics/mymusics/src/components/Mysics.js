import './Mysics.css';
import { Hello } from './Musics_component';

function Mysics(data){

    const playSong = () => {
       let audio = new Audio(data.src);
        audio.play();
}

    return <>
        <div className="Mysics">
            <img src={data.img} className="song-img" onClick={playSong}></img>
            <div>
            <h1>{data.songName}</h1>
            <h1>{data.Artist}</h1>
            </div>
        </div>
    </>
}
export default Mysics;