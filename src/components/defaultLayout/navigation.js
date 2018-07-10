import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoB } from './../../assets';
import { SignOut } from './../../core/redux/actions/authAction';
import './css/navigation.scss';

class Navigation extends React.Component{
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
            {this.props.JWT === "" ? 
              <Link to="login">
                <span className="Navigation__contants__links__link --login">
                  로그인
                </span>
              </Link> :
              <span className="Navigation__contants__links__link --login" onClick={()=>this.props.SignOut()}>
                로그아웃
              </span>
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    JWT: state.authReducer.JWT,
  }
}

function mapDispatchToProps (dispatch){
  return {
    SignOut: () => dispatch(SignOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);