import React from 'react';
import Billboard from 'billboard.js';
import BillboardChart from "react-billboardjs";
import "react-billboardjs/lib/billboard.css";

/*
const CHART_DATA = {
    columns : [
        ["temp", 24, 23, 19, 17, 15, 13, 11, 14, 21]
    ],
    type : "line"
};

const SIZE = {
    height : 200,
    width : 750
};

const AXIS = {
    x : {
        type : "category",
        categories : [
            "PM 3",
            "PM 6",
            "PM 9",
            "AM 0",
            "AM 3",
            "AM 6",
            "AM 9",
            "PM 12",
            "PM 3"
        ]
    },

    y:{
        show : false
    }
};

const COLOR = {
    pattern : ["#ff0000"],
    onover : "#bb1111",
};

const LEGEND = {
    show : false
};

*/

export default class LineChart extends React.Component{

    // 이 부분 프로퍼티 받아서 바로 처리해버리기
    state = {
        CHART_DATA : {
            columns : [
                ["temp", 24, 23, 19, 17, 15, 13, 11, 14, 21]
            ],
            type : "line"
        },

        SIZE : {
            height : 200,
            width : 750           
        },

        AXIS : {
            x : {
                type : "category",
                categories : [
                    "PM 3",
                    "PM 6",
                    "PM 9",
                    "AM 0",
                    "AM 3",
                    "AM 6",
                    "AM 9",
                    "PM 12",
                    "PM 3"
                ]
            },
        
            y:{
                show : false
            }
        },

        COLOR : {
            pattern : ["#ff0000"],
            onover : "#bb1111",
        },
        
        LEGEND : {
            show : false
        }
    }

    render(){
        return(
            <BillboardChart
                data={this.state.CHART_DATA} size={this.state.SIZE} axis={this.state.AXIS} color={this.state.COLOR} legend={this.state.LEGEND}
                className="my-3 justify-content-center"    
            >
            </BillboardChart>
        )
    }
}
/*
    let chart = Billboard.generate({
        bindto : "#bind",
        
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