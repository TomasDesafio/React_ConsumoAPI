import moment from 'moment';
export default function MiApi({ indicadorData }) {
  if (!indicadorData) {
    return <div>No se encontraron datos para mostrar.</div>;
  }
  const nombreIndicador = indicadorData.nombre;

  return (
    <div>
      <h3>{nombreIndicador}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Valor</th>
            
          </tr>
        </thead>
        <tbody>
          {indicadorData.serie.map((dato, index) => (
            <tr key={index}>
              <td>{dato.fecha}</td>
              <td>{dato.valor}</td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
