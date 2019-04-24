import React from 'react';
import '../css/DayWeather.css';
import StringDay from './StringDay';
import WeatherImage from './WeatherImage.js';

const DayWeather = (props) => {
//property로 부터 날짜 및 날씨 정보를 받음
    return(
        <div className = "Card">
            <h4 className = "Date">
                <StringDay day={props.date.getDay()} />
            </h4>
            <WeatherImage weather={props.weather} />
        </div>
    )
    //날씨 카드 한 장 rendering 하기
}

export default DayWeather;