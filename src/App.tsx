//COMO CRIAR PROJETO REACT COM TYPESCRIPT

//npx create-react-app NOME_DA_PASTA --template typescript --use-npm
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Home />
      
    </div>
  );
}

export default App;
