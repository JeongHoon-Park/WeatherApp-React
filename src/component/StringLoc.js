import React from 'react';

const StringLoc = (props) => {
    return(
        <div className="Loc mt-3 mb-2">
            <h3>{props.loc.dong}-dong {props.loc.gu}-gu {props.loc.city}</h3>
        </div>
    )
}

export default StringLoc;