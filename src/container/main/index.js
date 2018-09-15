import React from 'react';
import ContantsImg from '../../components/defaultLayout/contantsimg';
import Contants from '../../components/defaultLayout/contants';
import { mainimg } from '../../assets'
import { Explain, Imgcontants } from '../../components/main';

import './index.css';

export default class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      explainTab: 1,
    }
  }
  render(){
    return(
      <div>
        <ContantsImg imgs={mainimg}>
          <Imgcontants/>
        </ContantsImg>
        <Contants>
          <div className="Main">
            <span className="Main__service">
              주요 서비스
            </span>
            <div className="Main__ExplainMenu">
              <span className={this.state.explainTab === 1 ? "Main__ExplainMenu__Menu --select" : "Main__ExplainMenu__Menu"} onClick={()=> this.ChangeExplain(1)}>불만 리포트</span>
              <span className={this.state.explainTab === 2 ? "Main__ExplainMenu__Menu --select" : "Main__ExplainMenu__Menu"} onClick={()=> this.ChangeExplain(2)}>정치인 미팅</span>
              <span className={this.state.explainTab === 3 ? "Main__ExplainMenu__Menu --select  --last" : "Main__ExplainMenu__Menu --last"} onClick={()=> this.ChangeExplain(3)}>법안 제안</span>
            </div>
            <Explain index={this.state.explainTab}/>
          </div>
        </Contants>
      </div>
    )
  }
  ChangeExplain(index){
    switch(index){
      case 1:
        this.setState(()=> ({explainTab:1}));
        break;
      case 2:
        this.setState(()=> ({explainTab:2}));
        break;
      case 3:
        this.setState(()=> ({explainTab:3}));
        break;
      default:
        break;
    }
  }
}