import React from 'react';

import '../css/WeatherImage.css';
import Sun from '../svg/Sun.js';
import Cloud from '../svg/Cloud.js';
import CloudSun from '../svg/CloudSun.js';
import Storm from '../svg/Storm.js';
import Rain from '../svg/Rain.js';

import IconSun from '../svg/IconSun.js';

const WeatherImage = (props) => {

    const weather = props.weather;
    let image = undefined;

    switch(weather){
        case 0:
            image = <IconSun width="90" height="90"/>
            break;
        case 1:
            image = <CloudSun width="90" height="90"/>
            break;
        case 2:
            image = <Cloud width="90" height="90"/>
            break;
        case 3:
            image = <Rain width="90" height="90"/>
            break;
        case 4:
            image = <Storm width="90" height="90"/>
            break;
        default :
            image = 'Not registered';
    }

    return(
        <div className="d-flex flex-row justify-content-center mb-1">
            <button className="btn p-0 Button">
                {image}
            </button>         
        </div>

    )
}

export default WeatherImage;