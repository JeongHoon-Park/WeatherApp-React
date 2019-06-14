import React from 'react';

const StringDay = (props) => {

    const dayNumber = (props.day)%7;
    let stringDay = undefined;

    switch(dayNumber){
        case 0:
            stringDay = 'Sun';
            break;
        case 1:
            stringDay = 'Mon';
            break;
        case 2:
            stringDay = 'Tue';
            break;
        case 3:
            stringDay = 'Wed';
            break;
        case 4:
            stringDay = 'Thu';
            break;
        case 5:
            stringDay = 'Fri';
            break;
        case 6:
            stringDay = 'Sat';
            break;
        default:
            break;
    }

    return(
        <h5 className="Date my-1 text-center">{stringDay}</h5>
    )
}

export default StringDay;