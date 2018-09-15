import React, { Component } from 'react';
import ReactMde, {ReactMdeTypes} from 'react-mde'
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import './css/MeetingPostWrite.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class MeetingPostWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      mdeState: null
    }
    this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
  }

  handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
      this.setState({mdeState});
  }
  render() { 
    return (
      <div className="MeetingPostWrite">
        <div className="MeetingPostWrite__btn">
          글쓰기
        </div>
        <input type="text" className="MeetingPostWrite__title" onChange={(e)=>this.setState({title: e.target.value})} placeholder="제목"/>
        <div style={{width:'1221px', margin:'35px auto'}}>
          <ReactMde
          onChange={this.handleValueChange}
          editorState={this.state.mdeState}
          generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
        />
        </div>
      </div>
    );
  }
  Posting(){
    const {title, mdeState} = this.state;
    const {uuid} = this.props.match.params;
    axios.post('http://ec2.istruly.sexy:8080/recall',
    {
      author: "dumi",
      content: mdeState.markdown,
      politicianId: uuid,
      title: title,
    }
  ).then(res=>{
    switch (res.status){
      case 200: 
        <Redirect to={`/meeting/${uuid}`}/>
        break;
      case 401:
      case 403:
        alert("인증되지 않은 요청입니다. 다시 확인해주세요.");
        break;
      default:
        break;
    }
  })
  }
}
 
export default MeetingPostWrite;