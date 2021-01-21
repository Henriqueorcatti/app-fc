import './App.css';
import React, { useState } from 'react';
import txt from "./index.css"

function Contador() {

  const [espaco1, setEspaco1] = useState(0)
  const [espaco2, setEspaco2] = useState(0)
  const [resultado, setResultado] = useState('')

  function soma() {
    const num1 = parseInt(espaco1);
    const num2 = parseInt(espaco2);

    setResultado(num1 + num2)
  }

  function sub() {
    const num1 = parseInt(espaco1);
    const num2 = parseInt(espaco2);

    setResultado(num1 - num2)
  }

  function mult() {
    const num1 = parseInt(espaco1);
    const num2 = parseInt(espaco2);

    setResultado(num1 * num2)
  }

  function div() {
    const num1 = parseInt(espaco1);
    const num2 = parseInt(espaco2);

    setResultado(num1 / num2)
  }

  return (
    <div>
      <input className="txt" type="text" id="numero1" placeholder="enter a number" style={txt} onChange={(element) =>setEspaco1(element.target.value)}/>   
      <input className="txt" type="text" id="numero2" placeholder="enter a number" onChange={(elemento) =>setEspaco2(elemento.target.value)}/>
      
      <div></div>
      <button className="txt" onClick={soma} >+</button>
      <button className="txt" onClick={sub}>-</button>
      <div></div>
      <button className="txt" onClick={mult}>*</button>
      <button className="txt" onClick={div}>/</button>

      <p>
        Resultado: {resultado}
      </p>

    </div>
  );
}

export default Contador;

