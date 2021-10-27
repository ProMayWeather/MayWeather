import React, { Component } from "react";
import PropTypes from "prop-types";
import ViewOption from "../presentational/ViewOption";
import Current from "./Current";
import Flag from "../presentational/Flag";
import Forecast from "./Forecast";
import ViewMassenggeLoc from "../presentational/ViewMesseggeLoc";
import UltraViolet from "./UltraViolet";

class Options extends Component {
  constructor(props) {
    super(props);

    this.state = {
      option: 1
    };

    this.handleClickCurrent = this.handleClickCurrent.bind(this);
    this.handleClickForecast = this.handleClickForecast.bind(this);
    this.handleClickUltraViolet = this.handleClickUltraViolet.bind(this);
  }

  handleClickCurrent() {
    this.setState({
      option: 1
    })
  }

  handleClickForecast() {
    this.setState({
      option: 2
    })
  }

  handleClickUltraViolet() {
    this.setState({
      option: 3
    });
  }
  
  render() {
  const option = this.state.option
  const validLoc = this.props.validLoc
  return (
    <div>
      {validLoc ?
        <div>
          <Flag country={this.props.dataCurrent.sys.country.toLowerCase()} />
          <ViewOption
            handleClickCurrent={this.handleClickCurrent}
            handleClickForecast={this.handleClickForecast}
            handleClickUltraViolet={this.handleClickUltraViolet}  />
            { option == 1 ?
              <Current
                data={this.props.dataCurrent} />
              :
                <div>
                { option == 2 ?
                  <Forecast
                    data={this.props.dataForecast} />
                  :
                  <UltraViolet
                    dataCurrent={this.props.dataCurrentUV}
                    dataForecast={this.props.dataForecastUV}
                    dataLastMonth={this.props.dataLastMonth} />
                }
                </div>
            }
        </div>              
        :
        <ViewMassenggeLoc />
      }
    </div>
    );
  }
}

Options.propTypes = {
  validLoc: PropTypes.bool.isRequired,
  dataCurrent: PropTypes.object.isRequired,
  dataForecast: PropTypes.object.isRequired,
  dataLastMonth: PropTypes.object.isRequired
};

export default Options;
