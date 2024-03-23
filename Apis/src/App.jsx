
import { useState } from 'react';
import './App.css';
import Buscador from './components/Buscador';

function App() {
 

  return (
    <>
      <div>
        <h2 className='m-3'>Aplicación de Indicadores Económicos</h2>
        <Buscador />
      </div>
    </>
  );
}

export default App;