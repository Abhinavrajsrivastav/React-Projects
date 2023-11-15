// App.js
import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import InputCard from './Components/InputCard';
import Sample from "./Sample/Sample";
import SavedCard from './Components/SavedCard';

const App = () => {

  return (
   <div claName="cardsHolder">
    <InputCard />
    <div className="savedCard">
      <SavedCard />
      <SavedCard />
      <SavedCard />
      
    </div>
   </div>
    
  );
};

export default App;
