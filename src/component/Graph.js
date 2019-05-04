import React from 'react';
import Billboard from 'billboard.js';

const Graph = (props) => {

    let chart = Billboard.generate({
        bindto : "#chart",
        data: {
            type : "line",
            columns : [
                ["data1", 24, 23, 19, 17, 15, 14, 15, 21, 24]
            ]
        }
    });

    return(
        <div id="chart"></div>
    )
}

export default Graph;