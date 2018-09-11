import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReportBtn} from '../../assets/index';


class ReportList extends Component {
  render() { 
    const {index, name, image ,position, party, Reportposts, ReportPeople} = this.props;
    return (
      <div className="ReportContents__List__item">
        <Link to={`/report/${index}`}>
          <div className="ReportContents__List__item__profile">
            <div className="ReportContents__List__item__profile__img" style={{width:'95px',height:'95px',backgroundSize:'95px',
            backgroundImage:`url(${image})`}}></div>
              <div className="ReportContents__List__item__profile__contents">
                <span className="ReportContents__List__item__profile__contents--name">{name}</span><br/>
                <span className="ReportContents__List__item__profile__contents--Region">{position}</span>
              </div>
              <div className="ReportContents__List__item__contents">
                <div className="ReportContents__List__item__contents__party">
                  {party}<br/>
                  <i className="fas fa-fire"></i>{Reportposts}건 <i className="fas fa-users"></i>{ReportPeople}명
                </div>
                <img className="ReportContents__List__item__contents__btn" src={ReportBtn} alt={`${name}님 프로필로 바로가기`}/>
              </div>
          </div>
        </Link>
      </div>
    );
  }
}
 
export default ReportList;