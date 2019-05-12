import React from 'react';
import Billboard from 'billboard.js';
import BillboardChart from "react-billboardjs";
import "react-billboardjs/lib/billboard.css";

const CHART_DATA = {
    columns : [
        ["temp", 24, 23, 19, 17, 15, 13, 11, 14, 21]
    ],
    type : "line"
};

export default class LineChart extends React.Component{
    render(){
        return(
            <BillboardChart data={CHART_DATA}></BillboardChart>
        )
    }
}
/*
    let chart = Billboard.generate({
        bindto : "#bind",

        size : {
            height : 250,
            width : 800
        },

        data: {
            type : "line",
            columns : [
                ["temperature", 24, 23, 19, 17, 15, 14, 15, 21, 24]
            ]
        },
        
        axis : {
            x : {
                type : "category",
                categories : [
                    "PM 3시",
                    "PM 6시",
                    "PM 9시",
                    "AM 0시",
                    "AM 3시",
                    "AM 6시",
                    "AM 9시",
                    "PM 12시",
                    "PM 3시"
                ]
            }
        },
        area : {
            above : false
        },

        point : {
            show : false
        }
    });

    chart.axis.range({
        min : {y : 10},
        max : {y : 30},
    });

    chart.data.colors({
        temperature : "#FF0000"
    });

    return(
        <div id="bind">
            helloS
        </div>
    )
}

export default Graph;
*/