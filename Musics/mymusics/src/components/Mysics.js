import './Mysics.css';
// import Songs from './Songs';

function Mysics(data){
    return <>
        <div className="Mysics">
            <img src={data.img} className="song-img"></img>
            <h1>{data.Artist}</h1>
        </div>
    </>
}



export default Mysics;