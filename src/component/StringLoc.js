import React from 'react';

const StringLoc = (props) => {
    return(
        <div className="Loc mb-2">
            <h3>{props.loc.city} {props.loc.do}</h3>
        </div>
    )
}

export default StringLoc;