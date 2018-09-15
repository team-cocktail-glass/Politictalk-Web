import React from 'react';
import './css/contantsimg.css';

export default class ContantsImg extends React.Component{
  render(){
    return(
      <div className="ContantsImg" style={{width:window.screen.width}}>
        <img src={this.props.imgs} alt="콘텐츠 이미지" className="ContantsImg__img"/>
        <div className="ContantsImg__contants">{this.props.children}</div>
      </div>
    )
  }
}