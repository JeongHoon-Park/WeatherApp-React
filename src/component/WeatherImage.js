import React from 'react';
import Sun from '../svg/Sun.js';
import Cloud from '../svg/Cloud.js';
import CloudSun from '../svg/CloudSun.js';
import Storm from '../svg/Storm.js';
import Rain from '../svg/Rain.js';

const WeatherImage = (props) => {

    const weather = props.weather;
    let image = undefined;
    let license = undefined;

    switch(weather){
        case 0:
            image = <Sun />
            license = <p>Icons made by
                        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
                        from
                        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        is licensed by
                        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                    </p>
            break;
        case 1:
            image = <CloudSun />
            license = <p>Icons made by
                        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
                        from
                        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        is licensed by
                        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                    </p>
            break;
        case 2:
            image = <Cloud />
            license = <p>Icons made by
                        <a href="https://w<ww.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
                        from
                        <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>
                        is licensed by
                        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                    </p>
            break;
        case 3:
            image = <Rain />
            license = <p>Icons made by
                        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
                        from
                        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        is licensed by
                        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                    </p>
            break;
        case 4:
            image = <Storm />
            license = <p>Icons made by 
                        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
                         from
                         <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                         is licensed by
                         <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                    </p>
            break;
        default :
            image = 'Not registered';
    }

    return(
        <div>
            <button>
                {image}
            </button>
            <div>
                {license}
            </div>                
        </div>

    )
}

export default WeatherImage;