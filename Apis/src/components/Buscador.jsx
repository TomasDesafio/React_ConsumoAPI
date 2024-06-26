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
        console.log(data)
        const datafiltrada=[data].map((element) => {
        const {nombre,serie}=element;
          return {
            nombre,
            serie
          }
          });

        const dataordenada = datafiltrada.sort((x,y) => x.serie.fecha - y.serie.fecha)
        console.log(dataordenada)
        setIndicadorData(dataordenada);
        console.log(dataordenada)
        
        
        
      } catch (error) {
        console.error('Error al obtener datos del indicador:', error.message);
        setIndicadorData(null);
      }
    }
  };

  /*useEffect(() => {
    if (indicador !== '') {
      fetchData();
    }
  }, []);*/

  const handleIndicadorChange = (e) => {
    setIndicador(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div>
      <div>
        <h3 className='text-center m-3'>Indicadores Económicos</h3>
        <p className='text-center m-3'>Consulte por :[uf, ivp, dolar, dolar_intercambio, euro, ipc, utm, imacec, tpm, libra_cobre, tasa_desempleo, bitcoin] </p>
        <input
          type="text"
          placeholder="Ingrese el indicador económico:uf,dolar,bitcoin"
          value={indicador}
          onChange={handleIndicadorChange}
          className='m-3'
        />
        <button className='m-3' onClick={handleSearch}>Buscar</button>
      </div>
      {indicadorData && <MiApi indicadorData={indicadorData} />}
    </div>
  );
}