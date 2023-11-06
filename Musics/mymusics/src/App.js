import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/SmallComponents/NavBar';
import Musics_component from "./components/Musics_component";

function App(){
    return (
        <div className="container">
            <SideBar />
            <div className="container2">
            <NavBar />
            <Musics_component />
            </div>
        </div>
    )
}

export default App;