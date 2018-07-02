import React from 'react';
import './css/contants.scss';

export default class Contants extends React.Component{
  render(){
    return (
      <div>
        <div className="background" style={{width:window.screen.width}}>
        </div>
        <div className="contants" style={{width:window.screen.width}}>
          {
            <div className="contants__wrapper">
              {this.props.children}
            </div>
          }
        </div>
      </div>
    )
  }
}