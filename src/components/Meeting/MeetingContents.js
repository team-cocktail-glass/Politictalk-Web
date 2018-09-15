import React, { Component } from 'react';
import './css/MeetingContents.css';
import MeetingList from './MeetingList';

class MeetingContents extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="MeetingContents">
        <span className="MeetingContents__place"><i className="fas fa-map-marker-alt"></i> <strong>제주특별자치도 제주시 </strong>정치인</span>
        <div className="MeetingContents__List">
          {this.RenderPeople()}
        </div>
      </div>
    );
  }
  RenderPeople(){
    return <MeetingList index={1} name="강창일" image='http://www.assembly.go.kr/photo/9770279.jpg' position="제주특별자치도 제주갑 국회의원" party="더불어민주당" Meetingposts={5} MeetingPeople={35}/>
  }
}
 
export default MeetingContents;