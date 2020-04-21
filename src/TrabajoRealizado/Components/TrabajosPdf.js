import React from 'react';
import PdfPortal from './PdfPortal';

export default function TrabajosPdf({ data, tiempo, }) {
  console.log(data);
  
  return (
    <PdfPortal>
      <div className="m-5">
        <table className="table table-sm responsive">
          <thead className="thead-light">
            <tr>
              <th scope="col">Dia</th>
              <th scope="col">Actividad</th>
              <th scope="col">cliente</th>
              <th scope="col">Hora de Comienzo</th>
              <th scope="col">Hora de Finalizacion</th>
              <th scope="col">Tiempo Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((fichaje, i) => {               
              return (
                <tr key={i}>
                  <th scope="row">{fichaje.dia}</th>
                  <td>{fichaje.actividad}</td>
                  <td>
                    {fichaje.project !== ''
                      ? `${fichaje.clienteNombre} (${fichaje.project})`
                      : fichaje.clienteNombre}
                  </td>
                  <td>{fichaje.comienzoNum}</td>
                  <td>{fichaje.paradoNum}</td>
                  <td>{fichaje.duracionNum}</td>
                </tr>
              );
            })}
            <tr>
              <th scope="row">Totales</th>
              <td />
              <td />
              <td>{tiempo}</td>
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </PdfPortal>
  );
}
