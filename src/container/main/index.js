import React from 'react';
import ContantsImg from '../defaultLayout/contantsimg';
import Contants from '../defaultLayout/contants';
import {mainimg} from '../../assets'

import './index.scss';

export default class Main extends React.Component{
  render(){
    return(
      <div>
        <ContantsImg imgs={mainimg}>
        </ContantsImg>
        <Contants>
          <div className="Main">
            <span className="Main__service">
              주요 서비스
            </span>
          </div>
        </Contants>
      </div>
    )
  }
}