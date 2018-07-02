import React from 'react';
import ContantsImg from '../defaultLayout/contantsimg';
import Contants from '../defaultLayout/contants';
import {mainimg} from '../../assets'

export default class Main extends React.Component{
  render(){
    return(
      <div>
        <ContantsImg imgs={mainimg}>
        </ContantsImg>
        <Contants>
        </Contants>
      </div>
    )
  }
}