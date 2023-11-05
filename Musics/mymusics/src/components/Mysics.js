import './Mysics.css';
// import Songs from './Songs';


function Mysics(data){

    const playSong = () => {
       let audio = new Audio(data.src);
        audio.play();
}

    return <>
        <div className="Mysics">
            <img src={data.img} className="song-img" onClick={playSong}></img>
            <h1>{data.Artist}</h1>
        </div>
    </>
}



export default Mysics;