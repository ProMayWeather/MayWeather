import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

export default class LineDemo extends Component {
  
  render() {
    const values = this.props.data.map(e => e.value)
    const data = {
      labels: values.map(e => ''),
      datasets: [
        {
          label: 'value',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointRadius: 1,
          pointHitRadius: 1,
          data: values
        }
      ]
    };
  
    return (
      <div  className="p-3 mb-2 text-black container card-uv">
        <h2>Last 30 days UVI index: </h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

}