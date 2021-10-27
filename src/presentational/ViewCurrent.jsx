import React from "react";

const URL_LOC_ICON = "http://openweathermap.org/img/w/";
const FORMAT = ".png";

const ViewCurrent = props => {
  return (
    <div className="container">
      <div className="row justify-content-md-center text-dark card-bg" style={{padding: '20px'}}>
        <div className="col-2 text-center text-dark">
          <img
            width="80"
            height="80"
            src={URL_LOC_ICON + props.icon + FORMAT}
            alt=""
          />
          <div >
            <h5 className="font-weight-bold" style={{fontSize: '35px'}}>
              {props.temp} C°
            </h5>
          </div>
          <div style={{fontSize: '28px', color: '#f1f1f1', borderColor: '#000000'}}>{props.main}</div>
        </div>
        <div className="col-2" style={{fontSize: '18px'}}>
          <p>
            <b className="font-weight-bold">Pressure : </b>
            {props.pressure} hpm
          </p>
          <p>
            <b className="font-weight-bold">Min Temp : </b>
            {props.temp_min} C°
          </p>
          <p>
            <b className="font-weight-bold">Sunrise : </b>
            {props.sunrise}
          </p>
          <p>
            <b className="font-weight-bold">Wind : </b>
            {props.speed} km/h
          </p>
        </div>
        <div className="col-2" style={{fontSize: '18px'}}>
          <p>
            <b className="font-weight-bold">Humidity : </b>
            {props.humidity} %
          </p>
          <p>
            <b className="font-weight-bold">Max Temp : </b>
            {props.temp_max} C°
          </p>
          <p>
            <b className="font-weight-bold">Sunset : </b>
            {props.sunset}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewCurrent;
