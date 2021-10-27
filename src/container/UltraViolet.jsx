import React, {Component} from "react";
import PropTypes from "prop-types";
import ViewUvCurrent from "../presentational/ViewUvCurrent";
import ViewUvForecast from "../presentational/ViewUvForecast";
import ViewLastMonth from "../presentational/ViewLastMonth";


function toAssignColor(value){
  const colors = ['green','yellow', 'orange', 'red', 'violet']
  var color = ''
  if(value < 2){
    color = colors[0]
  } else if (value < 5) {
    color = colors[1]
  } else if (value < 7){
    color = colors[2]
  } else if(value < 10){
    color = colors[3]
  } else {
    color = colors[4]
  }
  return color
}

function addColor(data){
  data['color'] = toAssignColor(data.value)
  return data;
}

 function addColors(data) {
   var newData = data.map(elem => addColor(elem))
   return newData;
 }

  function convertDate(date){
    const newDate = new Date(date)
    var options = { weekday: 'short'}
    var dayString = new Intl.DateTimeFormat('en-US', options).format(newDate)
    const day = newDate.getDate()
    const month = newDate.getMonth() + 1
    const result = {day:dayString, dayMonth:day +'/' + month}
    return result  
  }

 function convertDates(data){
   var newData = data.map(elem => convertDate(elem['date_iso']))
   return newData
 }

 function filterFiveDays(data) {
  return data.filter((e,index) => index < 5)
 }

  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

 class UltraViolet extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    // filter next five days
    const dataForecast = filterFiveDays(addColors(this.props.dataForecast))
    const dataCurrent = addColor(this.props.dataCurrent)
    const dataLastMonth = this.props.dataLastMonth
    // filter next five days
    const dates = filterFiveDays(convertDates(dataForecast))

    return (
        <div >
          <ViewUvCurrent
            data={dataCurrent} />
          <ViewUvForecast
            data={dataForecast}
            dates={dates} />
          <div style={styles}>
            <ViewLastMonth 
              data={dataLastMonth}/>
          </div>
        </div>
    )
  }
}

UltraViolet.propTypes = {
  validLoc: PropTypes.bool.isRequired,
  dataCurrent: PropTypes.object.isRequired,
  dataForecast: PropTypes.object.isRequired,
  dataLastMonth: PropTypes.object.isRequired
};

export default UltraViolet;