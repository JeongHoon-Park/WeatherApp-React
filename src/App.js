import React, { Component } from 'react';
import './css/index.css';
import './css/bootstrap.min.css';

import DayWeather from './component/DayWeather';
import RenderInf from './component/RenderInf.js';
import Graph from './component/Graph.js';

const todayDate = new Date();

class App extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      briefWeather : {
        lowTemp : 12,
        highTemp : 18,
        icon : 0
      },
      fullWeather : {
        temp : ["temp", 23, 22, 21, 21, 20, 19, 18, 21, 24],
        rainProb : ["rainProb", 24, 98, 97, 92, 67, 34, 9, 8]
      },
      today: todayDate.getDay(),
      loc: {
        city: 'Busan',
        gu: 'Buk',
        dong: 'Deokcheon'
      } 
    }
    
    this.dateSwitch = this.dateSwitch.bind(this);
  }

  dateSwitch(){
    console.log("State Change");
    this.setState(()=>({
    fullWeather : {
        temp : ["temperature", 27, 25, 24, 23, 19, 16, 15, 18],
        rainProb : ["rainProb", 10, 10, 8, 15, 16, 13, 14, 10, 12]
    }
    }));
  }
  /*
    Weather Index -
    sun : 0   cloudSun : 1  cloud : 2
    rain : 3  storm : 4
  */
  render() {
    return (
      <div className="Weather">
        <RenderInf day={this.state.today} loc={this.state.loc} />
        <Graph weather={this.state.fullWeather} date={this.state.graphDay}/>
        <div className="d-flex flex-row mb-3">
          <button className="btn Card p-0" onClick={this.dateSwitch}>
            <DayWeather date={this.state.today} />
          </button>
          <button className="btn Card p-0" onClick={this.dateSwitch}>
            <DayWeather date={(this.state.today + 1) % 7} />
          </button>
          <button className="btn Card p-0" onClick={this.dateSwitch}>
            <DayWeather date={(this.state.today + 2) % 7} />
          </button>
          <button className="btn Card p-0" onClick={this.dateSwitch}>
            <DayWeather date={(this.state.today + 3) % 7} />
          </button>
          <button className="btn Card p-0" onClick={this.dateSwitch}>
            <DayWeather date={(this.state.today + 4) % 7} />
          </button>
          <button className="btn Card p-0" onClick={this.dateSwitch}>
            <DayWeather date={(this.state.today + 5) % 7} />
          </button>
          <button className="btn Card p-0" onClick={this.dateSwitch}>
            <DayWeather date={(this.state.today + 6) % 7} />
          </button>
          <button className="btn Card p-0" onClick={this.dateSwitch}>
            <DayWeather date={(this.state.today + 7) % 7} />         
          </button>
        </div>
      </div>

    );
  }
}

export default App;
