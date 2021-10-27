import React from "react";
import "../../public/style.css";

const URL_LOC_ICON = "http://openweathermap.org/img/w/";
const FORMAT = ".png";

const DetailForecast = props => {
  const list = props.obj.listDataDetail.slice();

  return (
    <div
      className={`modal fade ${props.showModal ? "show" : ""}`}
      style={{ display: `${props.showModal ? "block" : "none"}`, padding: '20px' }}
      id="exampleModalLong"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Forecast detail for:{" "}
              <b>
                {props.obj.date.day} {props.obj.date.dayMonth}
              </b>
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => props.onClick()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="card text-white bg-info mb-3">
              {list.map(object => (
                <div key={object.times} className="card-body">
                  <div className="row">
                    <div className="col-sm">
                      <p className="text text-left">
                        <b className="font-weight-bold">{object.times}</b>
                      </p>
                      <img
                        className="mr-3"
                        src={URL_LOC_ICON + object.weather[0].icon + FORMAT}
                        alt=""
                      />
                      <p className="text text-left">{object.main.temp} °C</p>
                      <p className="text text-left">
                        {object.weather[0].description}
                      </p>
                    </div>
                    <div className="col-sm">
                      <p className="text ">
                        <b className="font-weight-bold">pre:{"  "}</b>
                        {object.main.pressure} hpm
                        <b className="font-weight-bold">hum:{"  "}</b>
                        {object.main.humidity} %
                      </p>
                      <p className="text ">
                        <b className="font-weight-bold">wind: </b>
                        {object.wind.speed} km/h
                        <b className="font-weight-bold">rain: </b>
                        {object.clouds.all} %
                      </p>
                      <p className="text ">
                        <b className="font-weight-bold">min:  </b>
                        {object.main.temp_min} °C
                        <b className="font-weight-bold">max:  </b>
                        {object.main.temp_max} °C
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailForecast;
