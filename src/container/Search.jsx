import React, { Component } from "react";
import Load from "../presentational/Load";
import Options from "./Options";
import ViewSearch from "../presentational/ViewSearch";
import { WEATHER_KEY } from "../key";

const statusOk = 200;

function lastMonth(date) {
  var newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 30);
  var dateTime = newDate.getTime() / 1000;
  return (dateTime)
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      dataCurrent: [],
      dataForecast: [],
      dataCurrentUV: [],
      dataForecastUV: [],
      dataLastMonth: [],
      loading: true,
      validLoc:false,
      coord : null,
      country: '',
      date: null,
      date_iso: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

 componentDidUpdate(prevProps, prevState){
  
  if (this.state.coord !== prevState.coord) {
    const API_URL =
     `https://api.openweathermap.org/data/2.5/uvi?lat=${this.state.coord.lat}&lon=${this.state.coord.lon}&appid=${WEATHER_KEY}`
    fetch(API_URL)
    .then(function(response){
        return response.json();
    })
    .then(data => {
      this.setState({
        dataCurrentUV: data,
        date: data.date,
        date_iso: data.date_iso
      })
      const lat = this.state.coord.lat
      const lon = this.state.coord.lon
      const start = lastMonth(data.date_iso)
      const end = data.date
      const API_URL_LM =
      `https://api.openweathermap.org/data/2.5/uvi/history?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${WEATHER_KEY}`
      fetch(API_URL_LM)
      .then(function(response){
          return response.json();
        })
        .then(dataLastMonth => {
            this.setState({
              dataLastMonth: dataLastMonth
            })  
        });
    });

  
    const API_URL_FUV =
    `https://api.openweathermap.org/data/2.5/uvi/forecast?lat=${this.state.coord.lat}&lon=${this.state.coord.lon}&appid=${WEATHER_KEY}`
   fetch(API_URL_FUV)
   .then(function(response){
       return response.json();
   })
   .then(data => {
      this.setState({
        dataForecastUV: data
      })  
   });

  };
    
}

handleClick (e) {
    e.preventDefault();
    const { elements } = e.target;
    const city = elements.city.value;
    const country = elements.country.value;
    const API_URL_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_KEY}&units=metric`;
    fetch(API_URL_CURRENT)
      .then(function(response) {
        return response.json();
      })
      .then(dataCurrent => {
        if (dataCurrent.cod !== statusOk) {
          this.setState({
            clicked: true,
            validLoc: false,
          });
        } else {
          this.setState({
            dataCurrent: dataCurrent,
            clicked: true,
            validLoc: true,
            coord: dataCurrent.coord,
            country: dataCurrent.sys.country
          });
        }
      });

    const API_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${WEATHER_KEY}&units=metric`;
    fetch(API_URL_FORECAST)
      .then(function(response) {
        return response.json();
      })
      .then(dataForecast => {
        this.setState({
          dataForecast: dataForecast,
          loading: false
        });
      });
  }

  render() {
    const { clicked } = this.state;
    return (
      <div>
        <ViewSearch handleClick={this.handleClick} />
        <div>
          {clicked ? (
            <div>
              {this.state.loading ? (
                <Load />
              ) : (
                <Options
                  dataCurrent={this.state.dataCurrent}
                  dataForecast={this.state.dataForecast}
                  dataCurrentUV={this.state.dataCurrentUV}
                  dataForecastUV={this.state.dataForecastUV}
                  dataLastMonth={this.state.dataLastMonth}
                  validLoc={this.state.validLoc}
                  country={this.state.country}
                />
              )}
            </div>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}

export default Search;
