import React from 'react';
import logo from './logo.svg';
import './App.css';
import Perro from "./InterfaceTs/Perro";
import Pajaro from "./InterfaceTs/Pajaro";
import Gato from "./InterfaceTs/Gato";
import CustomButton from './components/CustomButton';

const perro = new Perro("Firulais");
const gato = new Gato("Garfield");
const pajaro = new Pajaro("Tweety");

perro.hacerSonido(); 
gato.hacerSonido();   
pajaro.hacerSonido(); 


function App() {
  const handleClick = () => {
    console.log('Botón clickeado');
  };

  return (
    <div>
      <CustomButton text="Button" onClick={handleClick} />
    </div>
  );
}

export default App;
