import './App.css';
import React, { useState } from 'react';

function App() {
    // Define the 'count' state variable and the 'setCount' function to update it
    const [count, setCount] = useState(0);

    // Event handler to increment the count
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="Container">
            <h1>{count}</h1>
            <button onClick={incrementCount}>Click me</button>
        </div>
    );
}

export default App;
