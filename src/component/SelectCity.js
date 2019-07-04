import React from 'react';

export default class SelectCity extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            SI : {"선택":"0", "서울" : "Seoul", "강화":"Kanghwa", "인천":"Incheon"},
            GN : {"선택":"0", "하남":"Hanam", "김포":"Kinho", "부천":"Bucheon", "여주":"Yeoju", "이천":"Ichon", "용인":"Yongin", "오산":"Osan", "안산":"Ansan", "화성":"Hwaseong", "성남":"Seongnam", "안양":"Anyang", "수원":"Suigen", "양평":"Yangpyong", "평택":"Pyongtak", "안성":"Anseong"},
            GB : {"선택":"0", "의정부":"Vijongbu", "고양":"Goyang", "구리":"Kuri", "파주":"Munsan", "동두천":"Hwangmae", "남양주":"Hwado", "연천":"yeoncheongun", "가평":"Gapyeong", "포천":"Umulmok"},
            BGU : {"선택":"0", "부산":"Busan", "기장":"Kijang", "창원":"Changwon", "마산":"Masan", "진해":"Chinhae", "진주":"Chinju", "통영":"T'aep'ong-dong", "김해":"Kimhae", "밀양":"Miryang", "거제":"Sinhyeon", "창녕":"Changnyeong", "고성":"Goseong", "남해":"Namhae", "하동":"Hadong", "함양":"Hamyang", "거창":"Imsil", "사천":"Seisan-ri", "양산":"Ungsang", "울산":"Ulsan"},
            GD : {"선택":"0", "포항":"Hoko", "경주":"Kyonju", "김천":"Gimcheon", "안동":"Andong", "구미":"Kumi", "영주":"Eisen", "영천":"Eisen", "상주":"Sangju", "문경":"Mungyeong", "경산":"Keizan", "근위":"Kunwi", "청송":"Cheongsong gun", "고령":"Koryong", "칠곡":"Waegwan", "예천":"Reisen", "울진":"Ulchin", "대구":"Daegu"},
            JB : {"선택":"0", "전주":"Jeongju", "군산":"Kunsan", "남원":"Nangen", "김제":"Kimje", "진안":"jin-angun", "무주":"Muju", "장수":"Changsu", "임실":"Imsil", "순창":"Sunch'ang", "고창":"Kochang", "부안":"Puan"},
            JG : {"선택":"0", "목포":"Moppo", "여수":"Reisui", "순천":"Sunchun", "나주":"Naju", "구례":"Kurye", "고흥":"Koyo", "보성":"Posung", "벌교":"Beolgyo", "해남":"Haenam", "영암":"Reigan", "무안":"Muan", "함평":"Kanhei", "영광":"Reiko", "신안":"Sinan", "광주":"Gwangju"},
            CB : {"선택":"0", "청주":"Cheongju", "충주":"Tsch-hung", "제천":"Teisen", "옥천":"ogcheongun", "영동":"Yong-dong", "진천":"Chinchon", "괴산":"Koesan", "음성":"Angol"},
            CD : {"선택":"0", "천안":"Tenan", "공주":"Kongju", "보령":"Taisen-ri", "아산":"Asan", "서산":"Suisan", "논산":"Nonsan", "계룡":"Kuong-mal", "당진":"Tangjin", "금산":"Kinzan", "부여":"Fuyo", "홍성":"Hongsung", "예산":"Yesan", "태안":"Taian", "대전":"Daejeon"},
            G : {"선택":"0", "춘천":"Chuncheon", "원주":"Wonju", "강릉":"Kang-neung", "동해":"Tong-hae", "태백":"Taebaek", "속초":"Sogcho", "삼척":"Chaen-mal", "홍천":"Hongchon", "횡성":"Tangpyong", "영월":"Neietsu", "평창":"Podulbat", "화천":"Hwacheon", "양구":"Yanggu", "인제":"Inje", "고성":"Kosong", "양양":"Yangyang"},
            JJ : {"선택":"0", "제주":"Jeju"}
        }
    }

    selectLocChange = (e) => {
        let i=0;
        const selectGoal = document.selectForm.city;
        
        const keyList = Object.keys(this.state[e.target.value]);
    
        for(i=selectGoal.options.length; i>0; i--){
            selectGoal.options[i] = null;
        }
        for(i=0; i<keyList.length; i++){
            selectGoal.options[i] = new Option(keyList[i], keyList[i]);
        }
    }

    handleChange = (e) => {
        let cityValue = document.selectForm.loc.value;
        this.props.liftMethod(e, this.state[cityValue][e.target.value]);
    }

    render(){
        return(
            <div>
                <form name="selectForm" className="d-flex mb-2 mt-3">
                    <select className="custom-select" name="loc" onChange={this.selectLocChange}>
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
                
                    <select className="custom-select" name="city" onChange={this.handleChange}>
                        <option vlaue="Default">도시</option>
                    </select>

                </form>
            </div>
        )        
    }
}