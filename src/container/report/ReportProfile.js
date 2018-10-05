import React, { Component } from 'react';
import ContantsImg from '../../components/defaultLayout/contantsimg';
import Contants from '../../components/defaultLayout/contants';
import {BackGroundDiscontent} from '../../assets/index';
import SearchBox from '../../components/defaultLayout/SearchBox';
import ReportPeople from '../../components/report/ReportPeople';
import ReportPostList from '../../components/report/ReportPostList';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ReportProfile extends Component {
  state = {
    list: [{
      "recallId": "a5b4c07f3-6514-40ff-a587-fbb01c67b8ed",
      "author": "dumi",
      "date": "2018-10-03T01:34:13.847+0000",
      "title": "어디가세요",
      "content": "# 대마고도 오세",
      "viewCount": 0,
      "politicianId": "a5ba0991271eea65b5e68aa80",
      "approve": [],
      "disApprove": []
    }]
  }
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
          <ReportPeople uuid={this.props.match.params.uuid}/>
          <Link to={`/report/${this.props.match.params.uuid}/write`}>
            <div className="ReportProfile__write">
              글쓰기
            </div>
          </Link>
          <div className="ReportProfile__list">
            {this.RenderPostList()}
          </div>
        </Contants>
      </div>
    );
  }
  componentDidMount() {
    axios.get(`http://ec2.istruly.sexy:8080/meeting/list/politician?politicianId=${this.props.match.params.uuid}`).then((res) => {
      if(res.status === 200) {
        this.setState({
          list: res.data
        });
      } else {
        this.setState({
          list: []
        });
      }
    })
  }
  RenderPostList() {
      return this.state.list.map((post) => {
        return <ReportPostList uuid={post.politicianId} index={post.recallId} anthor={post.author} date={post.date} title={post.title} content={post.content}/>
      })
  }
}
 
export default ReportProfile;