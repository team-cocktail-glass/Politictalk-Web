import React from 'react';
import ReactMarkdown from 'react-markdown';
import './css/MeetingPostContents.css';
import axios from 'axios';

export default class MeetingPostContents extends React.Component{
  render(){
    const {content, politicianId, recallid} = this.props
    return (
      <div className="MeetingPostContents">
        <ReactMarkdown source={content} />
        <div className="MeetingPostContents__btn" onClick={this.vote}>
          <i className="fas fa-thumbs-up"></i>
        </div>
      </div>
    )
  }
  vote(){
    axios.patch("http://ec2.istruly.sexy:8080/meeting/vote", 
    {
      "recallId": "string",
      "userId": "string"
    }).then(res=> {
      if(res.status === 201){

      }
    })
  }
}