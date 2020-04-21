import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { MdPictureAsPdf } from 'react-icons/md';
import { usePrint } from '../../hooks';
import Printable from '../../shared';

export function EstadisticaTrabajoDia({
  tiempoTotalesMinutos: minutos,
  title,
  tiempoTotalesFormated: totalesFormated,
  mainTitle
}) {
  let labels = Object.keys(minutos);
  labels.shift()
  const dataset = labels.map(key => minutos[key]);
  
  const main = mainTitle || 'Tu trabajo de hoy';
  const dataEstadisitacaVisitas = {
    labels: [...labels],
    datasets: [
      {
        data: [...dataset],
        backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
        hoverBackgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
      }
    ]
  };
  const [printing, print] = usePrint();
  return (
    <div className="card activity">
      <div className="card-header d-flex align-items-center">
        <h3 className="mr-5">{main}</h3>
        {/* <button
          type="button"
          className="btn btn-sm btn-primary no-print"
          onClick={print}
        >
          <MdPictureAsPdf />
        </button> */}
      </div>
      <div className="card-body">
        {Object.keys(totalesFormated).map(key => {
          if (key === 'total') {
            return null;
          }
          return (
            <p key={key}>
              <strong>{key}:</strong> {totalesFormated[key]}
            </p>
          );
        })}
        <Pie
          data={dataEstadisitacaVisitas}
          options={{
            title: {
              display: true,
              text: title
            }
          }}
        />
        <p className="totales">{totalesFormated.total}</p>
      </div>
    </div>
    // <Printable print={printing}>
    // </Printable>
  );
}



