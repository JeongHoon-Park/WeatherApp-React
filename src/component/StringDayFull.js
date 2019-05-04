import React from 'react';

const StringDayFull = (props) => {

    const dayNumber = props.day;
    let stringDayFull = undefined;
    
    switch(dayNumber){

        case 0:
            stringDayFull = 'Sunday';
            break;
        case 1:
            stringDayFull = 'Monday';
            break;
        case 2:
            stringDayFull = 'Tuesday';
            break;
        case 3:
            stringDayFull = 'Wednesday';
            break;
        case 4:
            stringDayFull = 'Thursday';
            break;
        case 5:
            stringDayFull = 'Friday';
            break;
        case 6:
            stringDayFull = 'Saturday';
            break;
        default:
            break;
    }

    return(
        <h5 className="mb-2 Day">{stringDayFull}</h5>
    )
}

export default StringDayFull;