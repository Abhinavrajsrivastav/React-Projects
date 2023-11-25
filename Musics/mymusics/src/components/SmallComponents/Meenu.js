//imported modules...
import React from 'react'
import './Meenu.css';

//Meenu component...
export const Meenu = (data) => {
  return (

  //in this component, we have returnned 2 information...  
    <div className="menu_">
      <img src={data.img}/>
      <h3>{data.title}</h3>
    </div>
  )
}

export default Meenu;