import React from 'react';
import BillboardChart from "react-billboardjs";
import "react-billboardjs/lib/billboard.css";

export default class LineChart extends React.Component{
    constructor(props){
        super(props);

        this.state ={

            REFINED_Weather : [
                
            ],

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
                       "random",
                       "parameter"
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
        if(this.props.weather !== prevProps.weather){
            
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
                (parseInt(this.props.weather[0].time.substring(11, 13))+9)%24,
                (parseInt(this.props.weather[1].time.substring(11, 13))+9)%24,
                (parseInt(this.props.weather[2].time.substring(11, 13))+9)%24,
                (parseInt(this.props.weather[3].time.substring(11, 13))+9)%24,
                (parseInt(this.props.weather[4].time.substring(11, 13))+9)%24,
                (parseInt(this.props.weather[5].time.substring(11, 13))+9)%24,
                (parseInt(this.props.weather[6].time.substring(11, 13))+9)%24,
                (parseInt(this.props.weather[7].time.substring(11, 13))+9)%24
            ];

            console.log(typeof(timeSortArr[0].toString()));

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
                            `${timeSortArr[0].toString()}H`,
                            `${timeSortArr[1].toString()}H`,
                            `${timeSortArr[2].toString()}H`,
                            `${timeSortArr[3].toString()}H`,
                            `${timeSortArr[4].toString()}H`,
                            `${timeSortArr[5].toString()}H`,
                            `${timeSortArr[6].toString()}H`,
                            `${timeSortArr[7].toString()}H`,
                        ]
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