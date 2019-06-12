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
            weatherIndex : props.add,
            briefWeather : {
                lowTemp : 12,
                highTemp : 18,
                icon : 0
            }
        }
    
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps){
        if(prevProps.iconArr!== this.props.iconArr){
            
            let icon = this.props.iconArr[(this.props.add*8)+3].icon;
            
            if(icon<300){
                icon = 4;
            }
            else if(icon <700){
                icon = 3;
            }
            else if(icon >801){
                icon = 2;
            }
            else if(icon === 801){
                icon =1;
            }
            else{
                icon = 0;
            }
            
            this.setState({
                briefWeather : {
                    icon : icon
                }
            })
        }
    }
    //lifting state up 한번 꼬아서 메서드 넘겨주기  
    handleChange(){
        this.props.lifting(this.props.add);
    }

    render(){
        return(
            <button className="btn Card p-0" onClick={()=>{this.handleChange()}}>
                <StringDay day={this.state.today}/>
                <WeatherImage weather={this.state.briefWeather.icon} />
                <Temperature
                    lowTemp={this.state.briefWeather.lowTemp}
                    highTemp={this.state.briefWeather.highTemp}
                />                
            </button>

            //날씨 카드 한 장 rendering
        )
    }
}