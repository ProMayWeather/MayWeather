import React, {Component} from "react";
import ViewFooter from "../presentational/ViewFooter";
import Search from './Search';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const divStyle = {
      margin:'0px', 
      padding:'4%', 
      width: '100%',
      height: '100%',
      overflow: 'auto' }

    const PATH = 'img/title'
    const FORMAT = '.png'

    return (
      <div>
        <div style={divStyle}>
          <div className="form-row justify-content-center">
            <img src= {PATH + FORMAT} width="50%"/>
          </div>
            <Search />
        </div>
        <div style={{position:'fixed', bottom:'0', height:'auto', marginTop:'40px', width:'100%', textAlign:'center'}}>
          <ViewFooter/>
        </div>
      </div>
    )
  }
}

export default App;