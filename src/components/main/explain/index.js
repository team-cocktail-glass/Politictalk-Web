import React, {Fragment} from 'react';
import { meetingicon, lawicon, reporticon } from './../../../assets';

import './index.css';

export default class Explain extends React.Component{
  render(){
    const {index} = this.props;
    return(
      <div className="explain">
        <div className="explain__wrapper">
        {this.RenderExplain(index)}
        </div>
        {this.Renderbtn(index)}
      </div>
    )
  }
  RenderExplain(index){
    switch(index){
      case 1 : 
        return (
          <Fragment>
            <img className="explain__wrapper__icon" src={reporticon} alt="불만 리포트 아이콘" />
            <div className="explain__wrapper__text">
              투표하고 뽑은 정치인이 공약을 지키지 않는 등 약속을 지키지 않는 정치인에게<br/>
              따끔한 소리를 전할 수 있는 공간입니다.<br/><br/>
              의견을 이메일로 전달하거나 사람들을 모아 목소리를 더 키울 수도 있습니다.<br/>
              따끔한 한 마디가 우리 사회를 바꿀 수 있습니다.
              </div>
          </Fragment>
        )
      case 2: 
        return (
          <Fragment>
          <img className="explain__wrapper__icon" src={meetingicon} alt="미팅 아이콘" />
            <div className="explain__wrapper__text">
              요구사항을 직접 전달하고 싶으신가요?<br />
              한 안건을 두고 정치인과 토론이 필요한 주제가 있다면 정치인 미팅을 신청해보세요!<br /><br />
              미팅을 통해 정치인에게 요구사항이 잘 전달되어 더 나은 사회를 만들 수 있을 겁니다.
            </div>
          </Fragment>
        )
      case 3:
        return (
          <Fragment>
            <img className="explain__wrapper__icon" src={lawicon} alt="법안 제안 아이콘" />
              <div className="explain__wrapper__text">
              “이런건 법으로 정해지지 않은건가?” 라는 생각이 든 적 있으세요?<br/>
              법으로 정해지지 않은 것들을 ‘법안 제안’을 통해 제안해보세요.<br/><br/>

              해당 법안에 알맞는 국회 위원회를 선택하고 함께하는 사람들을 모으면<br/>
              해당 위원회에 소속된 모든 위원들에게 이메일이 발송됩니다.
            </div>
          </Fragment>
        )
      default:
        return;
    }
  }
  Renderbtn(index){
    switch(this.props.index){
      case 1:
        return (
            <div className="btn-on explain_btn">
          <span className="btn-on__text">불만 리포트 작성하기</span>
        </div>  
        )
      case 2:
        return (
          <div className="btn-on explain_btn">
            <span className="btn-on__text">정치인에게 미팅 요청</span>
          </div>
        )
      case 3:
        return (
          <div className="btn-on explain_btn">
            <span className="btn-on__text">법안 제안하러 가기</span>
          </div>
        )
      default:
        break;
    }
  }
}