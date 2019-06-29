import React from 'react';

export default class SelectCity extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            SI : ["선택", "서울", "강화", "인천"],
            GN : ["선택", "하남", "김포", "부천", "여주", "이천", "용인", "오산", "안산", "화성", "성남", "안양", "수원", "양평", "평택", "안성"],
            GB : ["선택", "의정부", "고양", "구리", "파주", "동두천", "남양주", "연천", "가평", "포천"],
            BGU : ["선택", "부산", "기장", "창원", "마산", "진해", "진주", "통영", "김해", "밀양", "거제", "창녕", "고성", "남해", "하동", "함양", "거창", "사천", "양산", "울산"],
            GD : ["선택", "포항", "경주", "김천", "안동", "구미", "영주", "영천", "상주", "문경", "경산", "근위", "청송", "고령", "칠곡", "예천", "울진", "대구"],
            JB : ["선택", "전주", "군산", "남원", "김제", "진안", "무주", "장수", "임실", "순창", "고창", "부안"],
            JG : ["선택", "목포", "여수", "순천", "나주", "구례", "고흥", "보성", "벌교", "해남", "영암", "무안", "함평", "영광", "신안", "광주"],
            CB : ["선택", "청주", "충주", "제천", "옥천", "영동", "진천", "괴산", "음성"],
            CD : ["선택", "천안", "공주", "보령", "아산", "서산", "논산", "계룡", "당진", "금산", "부여", "홍성", "예산", "태안", "대전"],
            G : ["선택", "춘천", "원주", "강릉", "동해", "태백", "속초", "삼척", "홍천", "횡성", "영월", "평창", "화천", "양구", "인제", "고성", "양양"],
            JJ : ["선택", "제주"]
        }
    }

    selectChange = (e) => {
        let i=0;
        const selectGoal = document.selectForm.city;
        
        let optionState = this.state[e.target.value];
    
        for(i=selectGoal.options.length; i>0; i--){
            selectGoal.options[i] = null;
        }
        for(i=0; i<optionState.length; i++){
            selectGoal.options[i] = new Option(optionState[i]);
        }
    }

    render(){
        return(
            <div>
                <form name="selectForm" className="d-flex mb-2 mt-3">
                    <select className="custom-select" onChange={this.selectChange}>
                        <option value="Default">지역</option>
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
                
                    <select className="custom-select" name="city">
                        <option vlaue="Default">도시</option>
                    </select>

                </form>
            </div>
        )        
    }

   
}