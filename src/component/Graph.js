import React from 'react';
import BillboardChart from "react-billboardjs";
import "react-billboardjs/lib/billboard.css";

export default class LineChart extends React.Component{
    constructor(props){
        super(props);

        this.state ={

            CHART_DATA : {
                columns : 
                [
                    ["temperature", "12", "14", "14", "15", "19", "21", "12", "11"]
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
                       "15:00H",
                       "18:00H",
                       "21:00H",
                       "00:00H",
                       "03:00H",
                       "06:00H",
                       "09:00H",
                       "12:00H",
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
    }
    // 이 부분 프로퍼티 받아서 바로 처리해버리
    
    componentDidUpdate(prevProps){
        if(this.props.weather[0] !== prevProps.weather[0]){
            
            console.log("Graph.js : Component Did Update");
            //그래프에 들어갈 온도 배열
            let tempArr = [
                "temperature",
                this.props.weather[0].temperature,
                this.props.weather[1].temperature,
                this.props.weather[2].temperature,
                this.props.weather[3].temperature,
                this.props.weather[4].temperature,
                this.props.weather[5].temperature,
                this.props.weather[6].temperature,
                this.props.weather[7].temperature
            ]

            //그래프에 들어갈 x축 시간
            let timeSortArr = [
                `${((parseInt(this.props.weather[0].time.substring(11, 13))+9)%24).toString()}:00H`,
                `${((parseInt(this.props.weather[1].time.substring(11, 13))+9)%24).toString()}:00H`,
                `${((parseInt(this.props.weather[2].time.substring(11, 13))+9)%24).toString()}:00H`,
                `${((parseInt(this.props.weather[3].time.substring(11, 13))+9)%24).toString()}:00H`,
                `${((parseInt(this.props.weather[4].time.substring(11, 13))+9)%24).toString()}:00H`,
                `${((parseInt(this.props.weather[5].time.substring(11, 13))+9)%24).toString()}:00H`,
                `${((parseInt(this.props.weather[6].time.substring(11, 13))+9)%24).toString()}:00H`,
                `${((parseInt(this.props.weather[7].time.substring(11, 13))+9)%24).toString()}:00H`,
             ];
            
            console.log("TimeSortArr : " + timeSortArr);
            this.setState({
                CHART_DATA : {
                    columns : 
                    [
                        tempArr
                    ],
                    type: "line"
                },
                AXIS : {
                    x: {
                        type: "category",
                        categories : [
                            timeSortArr[0],
                            timeSortArr[1],
                            timeSortArr[2],
                            timeSortArr[3],
                            timeSortArr[4],
                            timeSortArr[5],
                            timeSortArr[6],
                            timeSortArr[7]
                        ]
                    },
                    y: {
                        show : false
                    }
                } 
            });

        }
    }

    render(){
        return(
            <BillboardChart
                data={this.state.CHART_DATA}
                size={this.state.SIZE}
                axis={this.state.AXIS}
                color={this.state.COLOR}
                legend={this.state.LEGEND}
                className="my-3 justify-content-center"    
            >
            </BillboardChart>
        )
    }
}