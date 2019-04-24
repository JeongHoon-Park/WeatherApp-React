import React, { Component } from 'react';
import './css/index.css';

import DayWeather from './component/DayWeather';

const todayDate = new Date();

class App extends React.Component {

  state = {
    lowTemp : undefined,
    highTemp : undefined,
    date : todayDate,
    weather : 0
  }

  /*
    Weather Index -
    sun : 0   cloudSun : 1  cloud : 2
    rain : 3  storm : 4
  */

  render() {
    return (
      <div>
        <div>
          <DayWeather date={this.state.date}
          weather={this.state.weather}/>
        </div>
      </div>
    );
  }
}

export default App;
