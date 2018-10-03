import React, { Component } from 'react';
import './css/ReportPostList.css';
import { ReportBtn } from '../../assets';
import { Link } from 'react-router-dom';

class ReportPostList extends Component {
  render() { 
    const {uuid, title, anthor, people, index} = this.props;
    const date = this.props.date.substring(0, 10);
    return (
      <div className="ReportPostList">
        <span className="ReportPostList__title">
          {title}
        </span>
        <div className="ReportPostList__Right">
          <span className="ReportPostList__Right__date">
            {date}
          </span>
          <span className="ReportPostList__Right__anthor">
            {anthor}
          </span>
          <span className="ReportPostList__Right__people">
            <i className="fas fa-users"/>{people}
          </span>
          <Link to={`/report/${uuid}/${index}`}>
            <img src={ReportBtn} alt="바로가기" className="ReportPostList__Right__Btn"/>
          </Link>
        </div>
      </div>
    );
  }
}
 
export default ReportPostList;