import React from 'react'
import './SideBar.css';
import Meenu from './SmallComponents/Meenu';

//SideBar elements data...
const menu = [
    {
        img: './imges/home (2).png',
        title: 'Home'
    },
    {
        img: './imges/search.png',
        title: 'Search'
    },
    {
        img: './imges/music.png',
        title: 'Library'
    },
    {
        img: './imges/menu (1).png',
        title: 'Menu'
    }
]

export const SideBar = () => {
  return (
  //here we have returned 3 information...
    <div className="sideBar">
          <div className="brand">
             <img src='./imges/logo_.png'></img>
             <h3>New World</h3>
          </div>

          <div className="mainu">
             <Meenu img={menu[0].img} title={menu[0].title}/>
             <Meenu img={menu[1].img} title={menu[1].title}/>
             <Meenu img={menu[2].img} title={menu[2].title}/>
             <Meenu img={menu[3].img} title={menu[3].title}/> 
          </div>

          <div className="imgUpdate">
            <img src="./imges/ai5.png"></img>
          </div>
           
         </div>
  )
}

export default SideBar;
