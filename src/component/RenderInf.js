import React from 'react';
import StringDayFull from './StringDayFull.js';
import StringLoc from './StringLoc.js';
import SelectCity from './SelectCity.js';

const RenderInf = (props) => {
    return(
        <div>
            <SelectCity />
            <StringLoc loc={props.loc}/>
            <StringDayFull day={props.day}/>
        </div>
    )
}

export default RenderInf;