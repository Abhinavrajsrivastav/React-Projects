import React, {useState} from 'react';
import SideBar from './Components/SideBar';
import './App.css';
import MainBox from'./Components/MainBox';

const App = () => {

  const [Library,setLibrary] = useState(false);
  return<>
    <div className="Container">
    <SideBar Library={Library} setLibrary={setLibrary}/>
    <MainBox setLibrary={setLibrary} Library={Library}/>
    </div>
</>
}
export default App;
