import React, { Component } from 'react';
import './css/index.css';
import './css/bootstrap.min.css';

import DayWeather from './component/DayWeather';

const todayDate = new Date();

class App extends React.Component {

  state = {
    lowTemp : 12,
    highTemp : 18,
    day : todayDate.getDay(),
    weather : 0
  }

  /*
    Weather Index -
    sun : 0   cloudSun : 1  cloud : 2
    rain : 3  storm : 4
  */

  render() {
    return (
      <div className="d-flex flex-row">
        <DayWeather date={this.state.day} weather={this.state.weather}/>
        <DayWeather date={(this.state.day+1)%7} weather={this.state.weather+1} lowTemp={this.state.lowTemp} highTemp={this.state.highTemp}/>
        <DayWeather date={(this.state.day+2)%7} weather={this.state.weather+2} />
        <DayWeather date={(this.state.day+3)%7} weather={this.state.weather+3} />
        <DayWeather date={(this.state.day+4)%7} weather={this.state.weather+4} />
        <DayWeather date={(this.state.day+5)%7} weather={this.state.weather} />
        <DayWeather date={(this.state.day+6)%7} weather={this.state.weather+1} />
        <DayWeather date={(this.state.day+7)%7} weather={this.state.weather+2} />
      </div>
    );
  }
}

export default App;
