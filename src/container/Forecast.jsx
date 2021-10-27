import React, { Component } from "react";
import ViewForecast from "../presentational/ViewForecast";
import DetailForecast from "../presentational/DetailForecast";

function convertDate(date) {
  /*
   * function take a date parameter an convert to a new Date.
   * get the format day like 'Mon' and get 'day-month' in format 'x/x'
   * return  {day:Mon , dayMonth:1/6} object.
   */
  const newDate = new Date(date);
  const options = { weekday: "short" };
  // day in short ex: Mon
  const dayString = new Intl.DateTimeFormat("en-US", options).format(newDate);
  // get month starting 0 example: getMonth(May) => 4
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const result = { day: dayString, dayMonth: `${day}/${month}` };
  return result;
}

function filterDate(data) {
  /* receive data object and return a list filtered with
   * different days at the same time in this case 12:00:00 hr
   */ 
  return data.filter(object => (object.dt_txt.endsWith('12:00:00')))
}

function filterDataOfDay(dt_txt, data) {
  /* receive two parameters dt_txt is a date and all data objects
   * and return a list filtered matching the days with the date 'yyyy-mm-dd'
   *
   * return : Array [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
   */

  const str = dt_txt.split(" ");
  const dataList = data.filter(object => object.dt_txt.startsWith(str[0]));
  const arrayTime = arrayOfTimes(dataList);
  // add a new key to each object for detailed time, this is used in DetailForecast
  const result = dataList.map((object, x) => ({
    times: arrayTime[x],
    ...object
  }));

  return result;
}

function arrayOfTimes(array) {
  /* receivea array of object and return an array of time
   * to show time detailed forecast
   * this func is use in filterDataOfDay to add a new key value
   * in the object times: 00:00:00-03:00:00
   * result : [00:00:00-03:00:00,...]
   */
  const arrayTimes1 = array.map(x => x.dt_txt.split(" ")[1]);
  const arrayTimes2 = arrayTimes1.slice();
  arrayTimes2.shift();
  arrayTimes2.push("00:00:00");
  const result = arrayTimes1.map((x, y) => `${x}-${arrayTimes2[y]}`);
  return result;
}

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      objClicked: {}
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    this.setState({
      clicked: !this.state.clicked,
      objClicked: obj
    });
  }

  render() {
    const dataFiltered  = filterDate(this.props.data.list)
    const listData = dataFiltered.map(object => [{date: convertDate(object.dt_txt),
      icon:object.weather[0].icon, 
      min:object.main.temp_min,
      max:object.main.temp_max,
      // list data detail for some day each 3 hours using when clic
      // a card for more detail info
      listDataDetail: filterDataOfDay(object.dt_txt, this.props.data.list)
    }])

    return (
       <div>
         <div>
          <ViewForecast listObject = {listData}
                          obj={this.state.objClicked}
                          handleClick={this.handleClick} />
         </div>
         <div>
          { this.state.clicked ?
              <DetailForecast  onClick={this.handleClick}
              obj={this.state.objClicked}
              showModal={this.state.clicked} />
            :
            null
            }
         </div>
       </div>
    )
  }
}

export default Forecast;
