import React from 'react';

export default class SelectCity extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            SI : [],
            GN : [],
            GB : [],
            BGU : [],
            GD : [],
            JB : [],
            JG : [],
            CB : [],
            CD : [],
            G : [],
            JJ : []
        }
    }

    render(){
        return(
            <div>
                <select className="custom-select">
                    <option value="SI">서울/인천</option>
                    <option value="GN">경기도 남부</option>
                    <option value="GB">경기도 북부</option>
                    <option value="BGU">부산/경남/울산</option>
                    <option value="GD">경북/대구</option>
                    <option value="JB">전북</option>
                    <option value="JG">전남/광주</option>
                    <option value="CB">충북</option>
                    <option value="CD">충남/대전</option>
                    <option value="G">강원</option>
                    <option value="JJ">제주</option>
                </select>

                <select className="custom-select">

                </select>
            </div>
        )        
    }

}