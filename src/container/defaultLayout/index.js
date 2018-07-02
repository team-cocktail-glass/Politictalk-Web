import React from 'react';
import Contants from './contants';


export default class Defaultlayout extends React.Component{
  render(){
    return(
      <div>
        <Contants>
          {this.props.children}
        </Contants>
      </div>
    )
  }
}