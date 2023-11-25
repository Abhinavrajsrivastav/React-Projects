import React, {useState} from 'react';
import './SideBar.css';

const SideBar = () => {
    const [Library, SetLibrary] = useState(false);
  return <>
     <div className={`Library${Library ? "-open" : ""}`}>
     <button onClick={()=>SetLibrary(!Library)} className='btn'>Library</button>
     <h1>Hello</h1>
     </div>
  </>
}

export default SideBar;
