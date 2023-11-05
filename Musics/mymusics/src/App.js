import Mysics from "./components/Mysics";
import './App.css';
import Songs from './components/Songs';

import SideBar from './components/SideBar';

const hello = [
    {
        song_src: "./musics/Alan_walker.m4a"
    }
]

function App(){
    return (
        <div className="container">
            <SideBar />
            <div className="container2">
            <div className="navBar">
            <button className="sign_up">Sign up</button>
            <button className="log_in">Login</button>      
            </div>
            <div className="Mysics-item">
            <Mysics songName={Songs[0].SongName} Artist={Songs[0].artist} img={Songs[0].image} src={hello[0].song_src}/>
            <Mysics songName={Songs[1].SongName} Artist={Songs[1].artist} img={Songs[1].image} src={hello[0].song_src}/>
            <Mysics songName={Songs[2].SongName} Artist={Songs[2].artist} img={Songs[2].image} src={hello[0].song_src}/>
            <Mysics songName={Songs[2].SongName} Artist={Songs[2].artist} img={Songs[2].image} src={hello[0].song_src}/>
        </div>
            </div>
        </div>
    )
}

export default App;