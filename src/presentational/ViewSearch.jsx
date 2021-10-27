import React from "react";
import PropTypes from "prop-types";

const ViewSearch = ({ handleClick }) => (
  <form data-toggle="validator" onSubmit={handleClick}>
    <div className="card-body">
      <div className="form-row justify-content-center">
        <div className="col-lg-4 col-lg-offset-4">
          <div className="container p-1">
            <input
              type="text"
              name="city"
              placeholder="Enter your city name"
              className="form-control"
              required
            />
          </div>
          <div className="container p-1">
            <input
              type="text"
              name="country"
              placeholder="Enter your country code"
              className="form-control"
              required
            />
          </div>
          <div className="container p-2 text-center" style={{marginTop: '20x'}}>
            <h5 >For example: Cordoba, AR</h5>
          </div>
          <div className="container p-2">
            <button className="btn btn-primary btn-block" type="submit">
              Check Weather
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
);

ViewSearch.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default ViewSearch;
