import React, { Component } from 'react';
import './css/MeetingPeople.css';
import axios from 'axios';

class MeetingPeople extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"강창일",
      email:'korea@korea.co.kr',
      image: 'http://www.assembly.go.kr/photo/9770279.jpg',
      position:"제주특별자치도 제주갑 국회의원",
      party:"더불어민주당",
      Meetingposts:5,
      MeetingPeople:35,
    }
  }
  render() {
    const {uuid} = this.props;
    const {name, email, image, position, party, MeetingPeople, Meetingposts} = this.state;
    return (
      <div className="MeetingPeople">
        <div className="MeetingPeople__profile">
          <div className="MeetingPeople__profile__img" style={{width:'125px',height:'125px',backgroundSize:'125px',
            backgroundImage:`url(${image})`}}></div>
          <span className="MeetingPeople__profile__name">{name} 의원</span><br/>
          {position}
        </div>
        <div className="MeetingPeople__explain">
          정당 - {party}<br/>
          이메일 - <a href={`mailto:${email}`}>{email}</a> 
          <div className="MeetingPeople__explain__subexplan">
            <i className="fas fa-fire"></i>{Meetingposts}건 <i className="fas fa-users"></i>{MeetingPeople}명
          </div>
        </div>
      </div>
    );
  }
}
 
export default MeetingPeople;