import React from 'react';
import { logoB, logoW } from './../../assets';

export default class Navigation extends React.Component{
  render(){
    return(
      <div className={"Navigation" (window.scrollY>0 ? 'fix' : 'none')}>
        <div className="Navigation-contants">
          {(window.scrollY>0 ? <img src={logoB} alt="Politictalk 로고"/> : <img src={logoW} alt="Politictalk 로고"/>)}
        </div>
      </div>
    )
  }
}