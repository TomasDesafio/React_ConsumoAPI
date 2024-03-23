import moment from 'moment';
export default function MiApi({ indicadorData }) {
  if (!indicadorData) {
    return <div>No se encontraron datos para mostrar.</div>;
  }
  const nombreIndicador = indicadorData[0].nombre;

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
          {indicadorData[0].serie.map((dato, index) => (
            <tr key={index}>
              <td>{moment(dato.fecha).format('DD-MM-YY')}</td>
              <td>{dato.valor}</td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
