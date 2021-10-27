import React from "react";
import PropTypes from "prop-types";

const URL_LOC_ICON = "http://openweathermap.org/img/w/";
const FORMAT = ".png";

const ViewForecast = props => {
  const list = props.listObject.slice();
  return (
    <div className="container">
      <div className="card-group">
        {list.map(object =>
          object.map(obj => (
            <button
              className="card mb-3 button-forecast"
              style={{marginLeft: '5px'}}
              type="button"
              onClick={() => props.handleClick(obj)}
            >
              <div className="card-body" key={obj.date.day}>
                <img
                  className="img-forecast"
                  width="80"
                  height="80"
                  src={URL_LOC_ICON + obj.icon + FORMAT}
                  alt=""
                />
                <h3 className="card-title text-center">
                  {obj.date.day}
                  {" "}
                  {obj.date.dayMonth}
                </h3>
                <p className="card-text text-center">
                  <b className="font-weight-bold">min:</b>
                  {obj.min}
                </p>
                <p className="card-text text-center">
                  <b className="font-weight-bold">max:</b>
                  {obj.max}
                </p>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

ViewForecast.propTypes = {
  listObject: PropTypes.array.isRequired
};

export default ViewForecast;
