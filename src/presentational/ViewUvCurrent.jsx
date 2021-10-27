import React from 'react';
import '../../public/style.css'

const color = {'yellow' : "color-yellow" , 'green' : 'bg-success', 'orange' : 'bg-warning', 'red' : 'bg-danger', 'violet' : 'color-violet'}

const ViewUvCurrent = (props) => {
  return (
    <div  className="p-3 mb-2 text-black container card-uv">
      <h2>Current UVI index: </h2>
      <p className="row justify-content-md-center"> <h1>{props.data.value}</h1></p>
      <div className="progress card-uv" style={{height: "17px"}}>
      <div className={"progress-bar" + " " + color[props.data.color]} role="progressbar" style={{width: ((100 / 11) * props.data.value) + "%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress" style={{height: "40px"}}>
        <div className="progress-bar bg-success" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        <div className="progress-bar color-yellow" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        <div className="progress-bar color-violet" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
 );
};
export default ViewUvCurrent;