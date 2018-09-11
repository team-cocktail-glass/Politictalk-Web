import React, { Component } from 'react';
import './css/ReportPostList.scss';
import { ReportBtn } from '../../assets';
import { Link } from 'react-router-dom';

class ReportPostList extends Component {
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
          <Link to={`/report/1/${index}`}>
            <img src={ReportBtn} alt="바로가기" className="ReportPostList__Right__Btn"/>
          </Link>
        </div>
      </div>
    );
  }
}
 
export default ReportPostList;