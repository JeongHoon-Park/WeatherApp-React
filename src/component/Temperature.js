import React from 'react';

const Temperature = (props) => {
    return(
        <div className='d-flex flex-row justify-content-center'>
            <h4 className='HighTemp m-0 pr-4'>{props.highTemp}°C</h4>
            <h4 className='LowTemp m-0'>{props.lowTemp}°C</h4>
        </div>
    )
}
export default Temperature;