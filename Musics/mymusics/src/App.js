import Mysics from "./components/Mysics";
import './App.css';
import Songs from './components/Songs';

function App(){
    return (
        <div className="Mysics-item">
            <Mysics songName={Songs[0].SongName} Artist={Songs[0].artist} img={Songs[0].image}/>
            <Mysics songName={Songs[1].SongName} Artist={Songs[1].artist} img={Songs[1].image}/>
            <Mysics songName={Songs[2].SongName} Artist={Songs[2].artist} img={Songs[2].image}/>
        </div>
    )
}

export default App;