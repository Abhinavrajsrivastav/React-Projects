import './SideBar.css';
import Song from './Song';
import NavBar from './NavBar';

const SideBar = ({
    Library,
    setLibrary,
})=>{
    return <>
        <div className={`SideBar${Library ? "-Open" : ""}`}>
        <NavBar setLibrary={setLibrary} Library={Library}/>
         <Song />
         <Song />
         <Song />
         <Song />
         <Song />
         <Song />
         <Song />
         <Song />
         <Song />
         <Song />
        </div>
</>
}

export default SideBar; 