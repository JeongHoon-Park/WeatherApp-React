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
            image = <IconSun width="140" height="140"/>
            break;
        case 1:
            image = <CloudSun width="140" height="140"/>
            break;
        case 2:
            image = <Cloud width="140" height="140"/>
            break;
        case 3:
            image = <Rain width="140" height="140"/>
            break;
        case 4:
            image = <Storm width="140" height="140"/>
            break;
        default :
            image = 'Not registered';
    }

    return(
        <div className="d-flex flex-row justify-content-center">
            <button className="btn p-0 Button mb-2">
                {image}
            </button>         
        </div>

    )
}

export default WeatherImage;