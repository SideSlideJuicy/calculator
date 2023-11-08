import React, { useState } from 'react';
import './calculator.css'; // Importing the CSS file for styling

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

  const handleFunctionClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        placeholder="0"
        className="display"
        onChange={(e) => setInput(e.target.value)} // Update input on change
        readOnly
      />
      <div className="button-grid">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleFunctionClick('+')}>+</button>

        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleFunctionClick('-')}>-</button>

        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleFunctionClick('*')}>*</button>

        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleCalculate} className="equal">=</button>
        <button onClick={() => handleFunctionClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
