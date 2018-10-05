import React, { Component } from 'react';
import ContantsImg from '../../components/defaultLayout/contantsimg';
import Contants from '../../components/defaultLayout/contants';
import SearchBox from '../../components/defaultLayout/SearchBox';
import MeetingPeople from '../../components/Meeting/MeetingPeople';
import MeetingPostList from '../../components/Meeting/MeetingPostList';
import {Link} from 'react-router-dom';
import {MeetingBackGround} from '../../assets/index';
import axios from 'axios';

class MeetingProfile extends Component {
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
          <MeetingPeople uuid={this.props.match.params.uuid}/>
          <Link to={`/meeting/${this.props.match.params.uuid}/write`}>
            <div className="MeetingProfile__write">
              글쓰기
            </div>
          </Link>
          <div className="MeetingProfile__list">
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
        return <MeetingPostList uuid={post.politicianId} index={post.meetingId} anthor={post.author} date={post.date} title={post.title} content={post.content}/>
      })
  }
}
 
export default MeetingProfile;