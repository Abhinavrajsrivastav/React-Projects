//recent update 11-11-2023 saturday
//imported modules...
import {React , useState} from 'react';
import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/SmallComponents/NavBar';
import Musics_component from "./components/Musics_component" ;


//App component...
function App(){
    const [Img,setImg] = useState('./imges/you.jpg');
    const [song,setSong] = useState('./musics/you.mp3');
    function mctoApp(songImg,songName){
       setImg(songImg);
       setSong(songName); 
    }
    return (
     //here we have returned 3 information...   
        <div className="container">
            <SideBar songImg={Img} songName={song}/>
            <div className="container2">
            <NavBar />
            <Musics_component musicsComponentToApp={mctoApp}/>
            </div>
        </div>
    )
}

export default App;