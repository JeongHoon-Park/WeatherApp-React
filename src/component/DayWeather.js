import React from 'react';
import '../css/DayWeather.css';
import StringDay from './StringDay';
import WeatherImage from './WeatherImage.js';
import Temperature from './Temperature.js';

export default class DayWeather extends React.Component{

    constructor(props){
        super(props);

        this.state={
            today : props.date,

            briefWeather : {
                lowTemp : 12,
                highTemp : 18,
                icon : 0
            }
        }
        //this.dateSwitch = this.dateSwitch.bind(this);
    }

    render(){
        return(
            <>
            <StringDay day={this.state.today}/>
            <WeatherImage weather={this.state.briefWeather.icon} />
            <Temperature
                lowTemp={this.state.briefWeather.lowTemp}
                highTemp={this.state.briefWeather.highTemp}
            />                
            </>

            //날씨 카드 한 장 rendering
        )
    }
}