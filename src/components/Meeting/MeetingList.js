import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MeetingBtn} from '../../assets/index';


class MeetingList extends Component {
  render() { 
    const {index, name, image ,position, party, MeetingPeople} = this.props;
    return (
      <div className="MeetingContents__List__item">
        <Link to={`/meeting/${index}`}>
          <div className="MeetingContents__List__item__profile">
            <div className="MeetingContents__List__item__profile__img" style={{width:'95px',height:'95px',backgroundSize:'95px',
            backgroundImage:`url(${image})`}}></div>
              <div className="MeetingContents__List__item__profile__contents">
                <span className="MeetingContents__List__item__profile__contents--name">{name}</span><br/>
                <span className="MeetingContents__List__item__profile__contents--Region">{position}</span>
              </div>
              <div className="MeetingContents__List__item__contents">
                <div className="MeetingContents__List__item__contents__party">
                  {party}<br/>
                  <i className="fas fa-users"></i>{MeetingPeople}명
                </div>
                <img className="MeetingContents__List__item__contents__btn" src={MeetingBtn} alt={`${name}님 프로필로 바로가기`}/>
              </div>
          </div>
        </Link>
      </div>
    );
  }
}
 
export default MeetingList;