import React from 'react'
import MiApi from './MiApi';
import { useState,useEffect } from 'react';

export default function Buscador() {
  
  const [indicador, setIndicador] = useState('');
  const handleIndicadorChange = (e) => {
    setIndicador(e.target.value);
  };

  const handleSearch = (indicador) => {
    if (indicador !== '') {
      <MiApi indicador={indicador}/>;
    }
  };


  return (
    <div>
      <div>
      <h2>Indicadores Economicos</h2>
      <input
        type="text"
        placeholder="Ingrese el indicador economico"
        value={indicador}
        onChange={handleIndicadorChange}
      />
      <button onClick={handleSearch}>Search</button>
     

 
      
    </div>
      
    </div>
  )
}
