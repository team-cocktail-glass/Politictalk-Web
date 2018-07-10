import React from 'react';
import './index.scss';

export default class Imgcontants extends React.Component{
  constructor(){
    super();
    this.state = {
      JWT: window.localStorage.getItem('JWT'),
    };
  }
  render(){
    return(
      <div className="Imgcontants" style={{left:window.screen.width*0.15}}>
        <div className="Imgcontants__title">
          통합 정치 참여 플랫폼, Politictalk
        </div>
        <div className="Imgcontants__explain">
          정치인한테 할 말은 있는데 어디에 써야될지 모르겠다면<br/>
          Politictalk에서 간편하게 써서 정치인에게 의견을 제시하세요!
        </div>
        {this.state.JWT === null || this.state.JWT === 'undefined' ?
        <div className="btn-on img_explain">
        <span className="btn-on__text">가입하고 의견제시하기</span>
      </div>
        :''}
      </div>
    )
  }
}