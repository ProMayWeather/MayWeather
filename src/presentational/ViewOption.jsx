import React from "react";
import PropTypes from "prop-types";

const ViewOption = ({ handleClickCurrent, handleClickForecast, handleClickUltraViolet }) => {
  return (
    <div className="container">
      <ul
        className="nav nav-pills mb-3 justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <button
            className="nav-link active btn btn-primary btn-lg btn-block border border-light"
            id="pills-Current-tab"
            type="button"
            data-toggle="pill"
            href="#pills-current"
            role="tab"
            aria-controls="pills-current"
            aria-selected="true"
            onClick={handleClickCurrent}
          >
            Current
          </button>
        </li>
        <li className="nav-item" style={{marginLeft: '7px'}}>
          <button
            className="nav-link btn btn-primary btn-lg btn-block border border-light"
            type="button"
            id="pills-forecast-tab"
            data-toggle="pill"
            href="#pills-forecast"
            role="tab"
            aria-controls="pills-forecast"
            aria-selected="false"
            onClick={handleClickForecast}
          >
            Forecast
          </button>
        </li>
        <li className="nav-item" style={{marginLeft: '7px'}}>
          <button
            className="nav-link btn btn-primary btn-lg btn-block border border-light"
            id="pills-uv-tab"
            type="button"
            data-toggle="pill"
            href="#pills-uv"
            role="tab"
            aria-controls="pills-uv"
            aria-selected="false"
            onClick={handleClickUltraViolet}
          >
            UV
          </button>
        </li>
      </ul>
    </div>
  );
};

ViewOption.propTypes = {
  handleClickCurrent: PropTypes.func.isRequired,
  handleClickForecast: PropTypes.func.isRequired
};

export default ViewOption;
