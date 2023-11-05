import React from 'react'
import './Meenu.css';
export const Meenu = (data) => {
  return (
    <div className="menu_">
      <img src={data.img}/>
      <h3>{data.title}</h3>
    </div>
  )
}

export default Meenu;