import React from 'react'
import { useState } from 'react';

export default function MiApi() {
    const [indicadorData, setindicadorData] = useState(null);
    const [indicador, setindicador] = useState('');

  


    const fetchindicador = async () => {
        const response = await fetch(`https://mindicador.cl/api/${indicador}`);
        const data = await response.json();
        setindicadorData(data);
      
        
      };


  return (
    <div>
      
    </div>
  )
}
