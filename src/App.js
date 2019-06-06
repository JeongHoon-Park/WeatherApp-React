import React from 'react';
import axios from 'axios';
import './css/index.css';
import './css/bootstrap.min.css';

import DayWeather from './component/DayWeather';
import RenderInf from './component/RenderInf.js';
import Graph from './component/Graph.js';

const todayDate = new Date();
const WeatherEndPoint = "http://api.openweathermap.org/data/2.5/forecast?q=Busan&appid=a594163e935529806653dee91061ca47&mode=json&units=metric";
//이 주소로 json 데이터 요청함

class App extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      today: todayDate.getDay(),
      loc: {
        city: 'Busan',
        gu: 'Buk',
        dong: 'Deokcheon'
      },
      isLoaded : false,
      OrgWeatherGraph: '',
      error: null,
      weatherIndex : 0
    }
    
    this.weatherIndexUpdate = this.weatherIndexUpdate.bind(this);
  }

  async componentDidMount(){
    const GetWeather  = await axios.get(WeatherEndPoint);

    console.log("Component Did Mount");
    let interimArr = []
    for(let i=this.state.weatherIndex*8; i<(this.state.weatherIndex+1)*8; i++){
      interimArr.push(
        {
          temperature : GetWeather.data.list[i].main.temp,
          time : GetWeather.data.list[i].dt_txt
        }
      )
    }
    this.setState({
      OrgWeatherGraph : interimArr
    })
  }

    async weatherIndexUpdate(value){

      const GetWeather = await axios.get(WeatherEndPoint);
      let interimArr = [];

      console.log("WeatherIndexUpdate"+GetWeather.data);
      for(let i=this.state.weatherIndex*8; i<(this.state.weatherIndex+1)*8; i++){
        interimArr.push({
          temperature : GetWeather.data.list[i].main.temp,
          time : GetWeather.data.list[i].dt_txt
        })
      }

      for(let i=0; i<8; i++){
        console.log("InterimArray"+interimArr[i].temperature);
      }

      this.setState({
        weatherIndex : value,
        OrgWeatherGraph : interimArr
      })
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
        <Graph weather={this.state.OrgWeatherGraph} date={this.state.graphDay}/>
        <div className="d-flex flex-row mb-3">
          <DayWeather date={this.state.today} add={0} lifting={this.weatherIndexUpdate}/>
          <DayWeather date={(this.state.today + 1) % 7} add={1} lifting={this.weatherIndexUpdate}/>
          <DayWeather date={(this.state.today + 2) % 7} add={2} lifting={this.weatherIndexUpdate}/>
          <DayWeather date={(this.state.today + 3) % 7} add={3} lifting={this.weatherIndexUpdate}/>
          <DayWeather date={(this.state.today + 4) % 7} add={4} lifting={this.weatherIndexUpdate}/>
        </div>
      </div>

    );
  }
}

export default App;
