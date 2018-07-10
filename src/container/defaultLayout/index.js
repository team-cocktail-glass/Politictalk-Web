import React from 'react';
import Contants from './../../components/defaultLayout/contants';


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