import React from 'react';
import './css/contants.css';

export default class Contants extends React.Component{
  render(){
    return (
      <div className="contants" style={{width:window.screen.width}}>
        {
          <div className="contants__wrapper">
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}