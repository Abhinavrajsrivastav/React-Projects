//recent update 11-11-2023 saturday
//imported modules...
import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/SmallComponents/NavBar';
import Musics_component from "./components/Musics_component";

//App component...
function App(){
    return (
     //here we have returned 3 information...   
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