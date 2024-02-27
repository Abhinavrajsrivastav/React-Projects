import './App.css';
import React, { useState } from 'react';


function App() {
    // Define the 'count' state variable and the 'setCount' function to update it
    // var x = 0;
    const [count, setCount] = useState(0);
    
    // Event handler to increment the count
    const incrementCount = () => {
        setCount(count + 1);
    };

    // Event handler to decrement the count
    const decrementCount = () => {
        setCount(count - 1);
    };

    // Event handler to multiply the count
    const Multiple = () => {
        setCount(count * 2);
    };

    return (
        <div className="Container">
            <h2>{count}</h2>
            <div>
                <button onClick={incrementCount}>Increase</button>
                <button onClick={decrementCount}>Decrease</button>
                <button onClick={Multiple}>Multiply</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default App;
