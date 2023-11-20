import React from 'react';
import SideBar from './Components/SideBar';
import './App.css';
import MainBox from'./Components/MainBox';

const App = () => {
  return<>
    <div className="Container">
    <SideBar />
    <MainBox />
    </div>
</>
}
export default App;
