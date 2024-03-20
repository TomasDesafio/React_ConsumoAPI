import React from 'react'
import { useState,useEffect } from 'react';

export default function MiApi({indicador}) {
    const [indicadorData, setindicadorData] = useState(null);
   

  


    const fetchindicador = async (indicador) => {
        const response = await fetch(`https://mindicador.cl/api/${indicador}`);
        const data = await response.json();
        setindicadorData(data);
      
        
      };
      useEffect(() => {
        if (indicador !== '') {
         return fetchindicador();
        }
      }, []);


  return (
    <div>
      <div>
          <h3>{indicadorData.nombre}</h3>
          <p>Fecha: {indicadorData.serie.fecha} </p>
          <p>Valor: {indicadorData.serie.valor}</p>
        </div>
    </div>
  )
}
