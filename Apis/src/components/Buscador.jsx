import React, { useState, useEffect } from 'react';
import MiApi from './MiApi';

export default function Buscador() {
  const [indicador, setIndicador] = useState('');
  const [indicadorData, setIndicadorData] = useState(null);

  const fetchData = async () => {
    if (indicador !== '') {
      try {
        const response = await fetch(`https://mindicador.cl/api/${indicador}`);
        if (!response.ok) {
          throw new Error(
            'No se encontraron datos para el indicador especificado.'
          );
        }
        const data = await response.json();
        setIndicadorData(data);
        
      } catch (error) {
        console.error('Error al obtener datos del indicador:', error.message);
        setIndicadorData(null);
      }
    }
  };

  const handleIndicadorChange = (e) => {
    setIndicador(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div>
      <div>
        <h2>Indicadores Económicos</h2>
        <input
          type="text"
          placeholder="Ingrese el indicador económico"
          value={indicador}
          onChange={handleIndicadorChange}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {indicadorData && <MiApi indicadorData={indicadorData} />}
    </div>
  );
}