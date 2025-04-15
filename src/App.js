import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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


import React from 'react';
import './App.css';
import MiComponente from './MiComponente';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Mi Aplicación React</h1>
          <MiComponente />
        </header>
      </div>
  );
}
export default App;


import React from 'react';
import './MiComponente.css';


function MiComponente() {
  return (
      <div className="mi-componente">
        <h2>Este es mi primer componente</h2>
        <p>¡Estoy aprendiendo React!</p>
      </div>
  );
}


export default MiComponente;

import React from 'react';
import './App.css';
import MiComponente from './MiComponente';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Mi Aplicación React</h1>
          <MiComponente />
        </header>
      </div>
  );
}

export default App;