import React from 'react';
import ReactMarkdown from 'react-markdown';
import './css/ReportPostContents.css';
import axios from 'axios';

export default class ReportPostContents extends React.Component{
  render(){
    const {content, politicianId, recallid} = this.props
    return (
      <div className="ReportPostContents">
        <ReactMarkdown source={content} />
        <div className="ReportPostContents__btn" onClick={this.vote}>
          <i class="fas fa-thumbs-up"></i>
        </div>
      </div>
    )
  }
  vote(){
    axios.patch("http://ec2.istruly.sexy:8080/recall/vote", 
    {
      "recallId": "string",
      "userId": "string"
    }).then(res=> {
      if(res.status === 201){

      }
    })
  }
}