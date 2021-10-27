import React from 'react';

const PATH = 'img/circ'
const FORMAT = '.png'
const ViewUvCurrent = (props) => {
  return (
    <div  className="p-3 mb-2 text-black container card-uv">
        <h2>Forecasted UVI index: </h2>
    <div  className="card-group" >
            {props.data.map((obj,index) =>
            <div className="card text-dark button">
                <div className="card-body">
                    <p className="card-text text-center">
                        {props.dates[index].day} {props.dates[index].dayMonth}
                    </p>
                    <p className="card-text text-center" >
                        <img src={PATH + obj.color + FORMAT} width="60px" height="60px"/>
                    </p>
                    <p className="card-text text-center">{obj.value}</p>
                </div>
            </div>
            )}
        </div>
    </div>
 );
};
export default ViewUvCurrent;