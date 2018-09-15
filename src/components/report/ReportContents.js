import React, { Component } from 'react';
import './css/ReportContents.css';
import ReportList from './ReportList';

class ReportContents extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="ReportContents">
        <span className="ReportContents__place"><i className="fas fa-map-marker-alt"></i> <strong>제주특별자치도 제주시 </strong>정치인</span>
        <div className="ReportContents__List">
          {this.RenderPeople()}
        </div>
      </div>
    );
  }
  RenderPeople(){
    return <ReportList index={1} name="강창일" image='http://www.assembly.go.kr/photo/9770279.jpg' position="제주특별자치도 제주갑 국회의원" party="더불어민주당" Reportposts={5} ReportPeople={35}/>
  }
}
 
export default ReportContents;