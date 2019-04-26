import React, { Component } from 'react';
import './css/index.css';
import './css/bootstrap.min.css';

import DayWeather from './component/DayWeather';

const todayDate = new Date();

class App extends React.Component {

  state = {
    lowTemp : 12,
    highTemp : 18,
    date : todayDate,
    weather : 1
  }

  /*
    Weather Index -
    sun : 0   cloudSun : 1  cloud : 2
    rain : 3  storm : 4
  */

  render() {
    return (
      <div>
        <DayWeather date={this.state.date} weather={this.state.weather} lowTemp={this.state.lowTemp} highTemp={this.state.highTemp}/>
      </div>
    );
  }
}

export default App;
