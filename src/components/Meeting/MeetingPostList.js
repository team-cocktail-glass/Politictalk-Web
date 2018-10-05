import React, { Component } from 'react';
import './css/MeetingPostList.css';
import { MeetingBtn } from '../../assets';
import { Link } from 'react-router-dom';

class MeetingPostList extends Component {
  render() { 
    const {uuid, title, anthor, people, index} = this.props;
    const date = this.props.date.substring(0, 10);
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
          <Link to={`/meeting/${uuid}/${index}`}>
            <img src={MeetingBtn} alt="바로가기" className="MeetingPostList__Right__Btn"/>
          </Link>
        </div>
      </div>
    );
  }
}
 
export default MeetingPostList;