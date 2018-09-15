import React, { Component } from 'react';
import ContantsImg from '../../components/defaultLayout/contantsimg';
import Contants from '../../components/defaultLayout/contants';
import {MeetingBackGround} from '../../assets/index';
import SearchBox from '../../components/defaultLayout/SearchBox';
import MeetingPostExplain from '../../components/Meeting/MeetingPostExplain';
import MeetingPostContents from '../../components/Meeting/MeetingPostContents';

class MeetingPost extends Component {
  render() { 
    return (
      <div>
        <ContantsImg imgs={MeetingBackGround}>
          <div className="Imgcontants">
          <div className="Imgcontants__title">정치인 미팅</div>
            <div className="Imgcontants__explain" style={{lineHeight:1.5}}>
            요구사항을 직접 전달하고 싶으신가요?<br/>
            한 안건을 두고 정치인과 토론이 필요한 주제가 있다면 정치인 미팅을 신청해보세요!<br/><br/>

            미팅을 통해 정치인에게 요구사항이 잘 전달되어 더 나은 사회를 만들 수 있을 겁니다.
            </div>
          </div>
        </ContantsImg>
        <Contants>
          <SearchBox/>
          <MeetingPostExplain />
          <MeetingPostContents/>
        </Contants>
      </div>
      
    );
  }
}
 
export default MeetingPost;