import React from "react";
import PropTypes from "prop-types";
import ViewCurrent from "../presentational/ViewCurrent";

function convertDate(unixTimestamp) {
  // convert miliseconds to hours
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

const Current = ({ data }) => {
  return (
    <div>
      <ViewCurrent
        sunrise={convertDate(data.sys.sunrise)}
        sunset={convertDate(data.sys.sunset)}
        humidity={data.main.humidity}
        pressure={data.main.pressure}
        temp={data.main.temp}
        temp_max={data.main.temp_max}
        temp_min={data.main.temp_min}
        main={data.weather[0].main}
        icon={data.weather[0].icon}
        speed={data.wind.speed}
      />
    </div>
  );
};

Current.propTypes = {
  data: PropTypes.object.isRequired
};

export default Current;
