import React, { Component } from 'react';
import './css/ReportPeople.scss';
import axios from 'axios';

class ReportPeople extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"강창일",
      email:'korea@korea.co.kr',
      image: 'http://www.assembly.go.kr/photo/9770279.jpg',
      position:"제주특별자치도 제주갑 국회의원",
      party:"더불어민주당",
      Reportposts:5,
      ReportPeople:35,
    }
  }
  render() {
    const {uuid} = this.props;
    const {name, email, image, position, party, ReportPeople, Reportposts} = this.state;
    return (
      <div className="ReportPeople">
        <div className="ReportPeople__profile">
          <div className="ReportPeople__profile__img" style={{width:'125px',height:'125px',backgroundSize:'125px',
            backgroundImage:`url(${image})`}}></div>
          <span className="ReportPeople__profile__name">{name} 의원</span><br/>
          {position}
        </div>
        <div className="ReportPeople__explain">
          정당 - {party}<br/>
          이메일 - <a href={`mailto:${email}`}>{email}</a> 
          <div className="ReportPeople__explain__subexplan">
            <i className="fas fa-fire"></i>{Reportposts}건 <i className="fas fa-users"></i>{ReportPeople}명
          </div>
        </div>
      </div>
    );
  }
}
 
export default ReportPeople;