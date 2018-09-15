import React, { Component } from 'react';
import ReportPeople from '../../components/report/ReportPeople';
import ContantsImg from '../../components/defaultLayout/contantsimg';
import Contants from '../../components/defaultLayout/contants';
import {BackGroundDiscontent} from '../../assets/index';
import SearchBox from '../../components/defaultLayout/SearchBox';
import ReportPostWrite from '../../components/report/ReportPostWrite';

class ReportWrite extends Component {
  render() { 
    return (
      <div>
        <ContantsImg imgs={BackGroundDiscontent}>
          <div className="Imgcontants">
            <div className="Imgcontants__title">불만 리포트</div>
            <div className="Imgcontants__explain">
              투표하고 뽑은 정치인이 공약을 지키지 않는 등<br/>
              약속을 지키지 않는 정치인에게 따끔한 소리를 전할 수 있는 공간입니다.
            </div>
          </div>
        </ContantsImg>
        <Contants>
          <SearchBox/>
          <div style={{fontFamily:'NanumSquare',fontSize:'27px', lineHeight:'2', color:'#505050',marginLeft:'80px',fontWeight:'700'}}>
            불만 리포트 쓰기
          </div>
          <ReportPeople/>
          <ReportPostWrite/>
        </Contants>
      </div>
    );
  }
}
 
export default ReportWrite;