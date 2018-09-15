import React, { Component } from 'react';
import './css/MeetingPostList.css';
import { MeetingBtn } from '../../assets';
import { Link } from 'react-router-dom';

class MeetingPostList extends Component {
  state = {
    title: '너무 이뻐요 누나아아',
    date: '2018.06.02',
    anthor: '박진영',
    people: 40,
    index: 1,
  }
  render() { 
    const {title, date, anthor, people, index} = this.state;
    return (
      <div className="MeetingPostList">
        <span className="MeetingPostList__title">
          {title}
        </span>
        <div className="MeetingPostList__Right">
          <span className="MeetingPostList__Right__date">
            {date}
          </span>
          <span className="MeetingPostList__Right__anthor">
            {anthor}
          </span>
          <span className="MeetingPostList__Right__people">
            <i className="fas fa-users"/>{people}
          </span>
          <Link to={`/meeting/1/${index}`}>
            <img src={MeetingBtn} alt="바로가기" className="MeetingPostList__Right__Btn"/>
          </Link>
        </div>
      </div>
    );
  }
}
 
export default MeetingPostList;