//import modules
import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import InputCard from './Components/InputCard';
import DefaultCard from './Components/DefaultCard';

//Parent App function...
const App = () => {
  const DummiCards = [
    // ... dummi cards
  ];

//dyanamics array of new and existing cards....
  const [array, setArray] = useState(DummiCards);

//it triger when it call by the child InputCard component
//  to receive data from child to parent...
  const updateArray = (card) => {
    const alreadyExists = array.some((obj) => obj.about === card);

//if data don't exist add it...
if (!alreadyExists) {
      setArray((prev) => {
        return [...prev, { index: prev.length, about: card }];
      });
    }
//else don't add it...
 else {
      alert("Already Exists");
    }
  };

  //This function when clear all button is clicked...
  const resetApp = () => {
    setArray([]);
  }

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <img src="https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/9affffb4ec5c115b8f742cd34b663cff/best_to_do_apps.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760" alt="Logo" className="navbar-logo" />
        <div className="navbar-brand">To do List</div>
        {/* Add other navigation links as needed */}
      </nav>

      {/* Main Content */}
      <div className="cardsHolder">
        <InputCard updateArr={updateArray} deleteMessage={resetApp}/>
      </div>
        <div className="savedCard">
          {array.map((card) => (
            <div key={card.index} className="custom-input" contentEditable="false">
              {card.about}
            </div>
          ))}
        </div>
    </div>
  );
};

export default App;
