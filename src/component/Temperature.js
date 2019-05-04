import React from 'react';

const Temperature = (props) => {
    return(
        <div className='d-flex flex-row justify-content-center align-contents-center'>
            <h5 className='HighTemp m-0 pr-2'>{props.highTemp}°C</h5>
            <h5 className='LowTemp m-0'>{props.lowTemp}°C</h5>
        </div>
    )
}
export default Temperature;