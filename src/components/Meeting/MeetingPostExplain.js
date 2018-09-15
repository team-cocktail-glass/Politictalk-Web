import React, { Component } from 'react';
import './css/MeetingPostExplain.css';

class MeetingPostExplain extends Component {
  constructor(){
    super();
    this.state = {
      name:"강창일",
      image: 'http://www.assembly.go.kr/photo/9770279.jpg',
      position:"제주특별자치도 제주갑 국회의원",
      title:"너무 이뻐요 누나아아",
      MeetingPeople:35,
      anthor:"박진영",
      date: "2018.06.02"
    }
  }
  render() { 
    const {name, image, position, title, MeetingPeople, anthor, date} = this.state;
    return (
      <div className="MeetingPostExplain">
        <div className="MeetingPostExplain MeetingPeople">
        <div className="MeetingPostExplain MeetingPeople__profile">
          <div className="MeetingPostExplain MeetingPeople__profile__img" style={{width:'125px',height:'125px',backgroundSize:'125px',
            backgroundImage:`url(${image})`}}></div>
            <span className="MeetingPostExplain MeetingPeople__profile__name">{name} 의원</span><br/>
            {position}
          </div>
          <div className="MeetingPostExplain__explain">
            {title}<br/>
            <span><i className="fas fa-users"></i>{MeetingPeople}</span>
            <div className="MeetingPostExplain__explain__date">
              {date}<br/>
              {anthor}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default MeetingPostExplain;