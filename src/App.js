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
      today: todayDate,
      loc: {
        city: 'Busan',
        gu: 'Buk',
        dong: 'Deokcheon'
      },
      isLoaded : false,
      OrgWeatherGraph: '',
      BriefWeather : '',
      weatherIndex : 0
      //lifting 에 사용되는 핵심 state
    }
    
    this.weatherIndexUpdate = this.weatherIndexUpdate.bind(this);
  }

  async componentDidMount(){

    console.log("Component Did Mount");
    const GetWeather  = await axios.get(WeatherEndPoint);

    let interimArr = []
    let iconArr = []

    for(let i=this.state.weatherIndex*8; i<(this.state.weatherIndex+1)*8; i++){
      interimArr.push(
        {
          temperature : GetWeather.data.list[i].main.temp,
          time : GetWeather.data.list[i].dt_txt,
          //icon : GetWeather.data.list[i].weather.id
        }
      )
    }

    for (let i=0; i<40; i++){
      iconArr.push({
        icon : GetWeather.data.list[i].weather[0].id,
        briefTemp : {
          temp_min : GetWeather.data.list[i].main.temp_min,
          temp_max : GetWeather.data.list[i].main.temp_max
        },
        time : GetWeather.data.list[i].dt_txt
      })
    }
 
    this.setState({
      OrgWeatherGraph : interimArr,
      BriefWeather : iconArr
    })
  }

    async weatherIndexUpdate(value){

      const GetWeather = await axios.get(WeatherEndPoint);
      let interimArr = [];

      for(let i=this.state.weatherIndex*8; i<(this.state.weatherIndex+1)*8; i++){
        interimArr.push({
          temperature : GetWeather.data.list[i].main.temp,
          time : GetWeather.data.list[i].dt_txt
        })
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
        <RenderInf day={(this.state.today.getDay()+this.state.weatherIndex)%7} loc={this.state.loc} />
        <Graph weather={this.state.OrgWeatherGraph}/>
        <div className="d-flex flex-row mb-3">
          <DayWeather date={this.state.today} add={0} lifting={this.weatherIndexUpdate} iconArr={this.state.BriefWeather}/>
          <DayWeather date={this.state.today} add={1} lifting={this.weatherIndexUpdate} iconArr={this.state.BriefWeather}/>
          <DayWeather date={this.state.today} add={2} lifting={this.weatherIndexUpdate} iconArr={this.state.BriefWeather}/>
          <DayWeather date={this.state.today} add={3} lifting={this.weatherIndexUpdate} iconArr={this.state.BriefWeather}/>
          <DayWeather date={this.state.today} add={4} lifting={this.weatherIndexUpdate} iconArr={this.state.BriefWeather}/>
        </div>
      </div>

    );
  }
}

export default App;
