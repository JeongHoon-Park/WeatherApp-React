import React from 'react';
import '../css/DayWeather.css';
import StringDay from './StringDay';
import WeatherImage from './WeatherImage.js';
import Temperature from './Temperature.js';

const DayWeather = (props) => {
//property로 부터 날짜 및 날씨 정보를 받음
    return(
        <button className = "btn Card p-0">
            <StringDay day={props.date}/>
            <WeatherImage weather={props.weather} />
            <Temperature lowTemp={props.weather.lowTemp} highTemp={props.weather.highTemp} />
        </button>
    )
    //날씨 카드 한 장 rendering 하기
}

export default DayWeather;