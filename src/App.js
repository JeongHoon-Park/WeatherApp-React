import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
  render() {
    return (
      <div className="row">>
        <div className="col-6">
          <DayWeather />
        </div>
      </div>
    );
  }
}

export default App;
