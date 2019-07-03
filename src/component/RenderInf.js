import React from 'react';
import StringDayFull from './StringDayFull.js';
import StringLoc from './StringLoc.js';

const RenderInf = (props) => {
    return(
        <div>
            <StringLoc loc={props.loc}/>
            <StringDayFull day={props.day}/>
        </div>
    )
}

export default RenderInf;