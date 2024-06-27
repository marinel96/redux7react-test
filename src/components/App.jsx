// src/components/App.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions';
import '../index.css';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(parseInt(inputValue)));
  };

  const handleDecrement = () => {
    dispatch(decrement(parseInt(inputValue)));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <input 
        type="number" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
