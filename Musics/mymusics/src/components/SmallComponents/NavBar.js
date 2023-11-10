
// Importing React and CSS
import './NavBar.css';
import React from 'react'

// NavBar component...
function NavBar() {
  return (

    // In this component, we have returned 3 information...
    <div>
      <div className="navBar">
        <h1>Arman Malik</h1>
            <button className="sign_up">Sign up</button>
            <button className="log_in">Login</button>      
    </div>
    </div>
  )
}

export default NavBar;
