import React, { useState } from 'react';
import './App.css';

function App() {
  const [resultado, setResultado] = useState('');

  function insert(num) {
    setResultado((prevResultado) => prevResultado + num);
  }

  function clean() {
    setResultado('');
  }

  function back() {
    setResultado((prevResultado) => prevResultado.slice(0, -1));
  }

  function calcular() {
    if (resultado) {
      try {
        setResultado(eval(resultado).toString());
      } catch (error) {
        setResultado('Erro');
      }
    }
  }

  return (
    <div className="calculator">
      <div className="calculator_display">
        <p id="resultado">{resultado}</p>
      </div>
      <div className="calculator__keys">
        <button className="btn" onClick={clean}>CE</button>
        <button className="btn" onClick={clean}>DEL</button>
        <button className="btn" onClick={back}>←</button>
        <button className="btn" onClick={() => insert('+')}>+</button>

        <button className="btn" onClick={() => insert('7')}>7</button>
        <button className="btn" onClick={() => insert('8')}>8</button>
        <button className="btn" onClick={() => insert('9')}>9</button>
        <button className="btn" onClick={() => insert('-')}>-</button>

        <button className="btn" onClick={() => insert('4')}>4</button>
        <button className="btn" onClick={() => insert('5')}>5</button>
        <button className="btn" onClick={() => insert('6')}>6</button>
        <button className="btn" onClick={() => insert('*')}>*</button>

        <button className="btn" onClick={() => insert('1')}>1</button>
        <button className="btn" onClick={() => insert('2')}>2</button>
        <button className="btn" onClick={() => insert('3')}>3</button>
        <button className="btn" onClick={() => insert('/')}>/</button>

        <button className="btn" onClick={() => insert('0')}>0</button>
        <button className="btn" onClick={() => insert('.')}>.</button>
        <button className="btn" onClick={calcular}>=</button>
      </div>
    </div>
  );
}

export default App;
