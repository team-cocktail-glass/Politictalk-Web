import React from 'react';
import { Link } from 'react-router-dom';
import { logoB } from './../../assets';
import './css/navigation.scss';

export default class Navigation extends React.Component{
  render(){
    return(
      <div className="Navigation" style={{ width:window.screen.width}}>
        <div className="Navigation__contants">
          <Link to="">
          <img src={logoB} alt="Politictalk 로고" className="Navigation__contants__img"/>
          </Link>
          <div className="Navigation__contants__links">
            <Link to="report">
              <span className="Navigation__contants__links__link">
                불만 리포트
              </span>
            </Link>
            <Link to="meeting">
              <span className="Navigation__contants__links__link">
                정치인 미팅
              </span>
            </Link>
            <Link to="law">
              <span className="Navigation__contants__links__link">
                법안 제안
              </span>
            </Link>
            <Link to="login">
              <span className="Navigation__contants__links__link --login">
                로그인
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}