import React from 'react';
import logo from './logo.svg';
import './App.css';
import Perro from "./InterfaceTs/Perro";
import Pajaro from "./InterfaceTs/Pajaro";
import Gato from "./InterfaceTs/Gato";

const perro = new Perro("Firulais");
const gato = new Gato("Garfield");
const pajaro = new Pajaro("Tweety");

perro.hacerSonido(); 
gato.hacerSonido();   
pajaro.hacerSonido(); 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
