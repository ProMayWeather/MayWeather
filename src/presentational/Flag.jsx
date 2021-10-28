import React from "react";
import PropTypes from "prop-types";

const URL_COUNTRY_FLAG = "https://flagcdn.com/";
const FORMAT = ".png";
const STYLE = "/flat";
const SIZE = "/16x12/";

const Flag = ({ country }) => {
  return (
    <div className="container" style={{padding: '10px'}}>
      <div className="form-row justify-content-center">
          <img
          width="40"
          height="30"
          src={URL_COUNTRY_FLAG + SIZE +  country + FORMAT}
          alt=""
        />
      </div>
    </div>
  );
};

Flag.propTypes = {
  country: PropTypes.string.isRequired
};

export default Flag;
