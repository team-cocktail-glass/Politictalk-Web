import React, { Component } from 'react';
import ContantsImg from '../../components/defaultLayout/contantsimg';
import Contants from '../../components/defaultLayout/contants';
import {BackGroundDiscontent} from '../../assets/index';
import SearchBox from '../../components/defaultLayout/SearchBox';
import ReportPostExplain from '../../components/report/ReportPostExplain';
import ReportPostContents from '../../components/report/ReportPostContents';
import axios from 'axios';

class ReportPost extends Component {
  state = {
    author: '',
    date: '',
    title: '',
    content: ''
  }
  render() { 
    const { author, date, title, content } = this.state;
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
          <ReportPostExplain uuid={this.props.match.params.uuid} postid={this.props.match.params.postid} author={author} date={date} title={title}/>
          <ReportPostContents uuid={this.props.match.params.uuid} postid={this.props.match.params.postid} content={content}/>
        </Contants>
      </div>
    );
  }
  componentDidMount() {
    axios.get(`http://ec2.istruly.sexy:8080/recall?recallId=${this.props.match.params.postid}`).then((res) => {
      this.setState({
        author: res.data.author,
        date: res.data.date.substring(0, 10),
        title: res.data.title,
        content: res.data.content,
      })
    })
  }
}
 
export default ReportPost;