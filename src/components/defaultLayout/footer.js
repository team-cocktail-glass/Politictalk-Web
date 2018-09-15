import React from 'react';
import { facebook, github } from './../../assets';
import './css/footer.css';

export default class Footer extends React.Component{
  render(){
    return(
      <footer className="footer" style={{width:window.screen.width}}>
        <div className="footer__wrapper">
          <div className="footer__wrapper__icons">
            <a href="https://www.facebook.com/PolitictalkDSM/"><img src={facebook} alt="facebook" className="footer__wrapper__icons__icon"/></a>
            <a href="https://github.com/team-cocktail-glass"><img src={github} alt="github" className="footer__wrapper__icons__icon"/></a>
          </div>
          <div className="footer__wrapper__developer">
            Web Front, Design - <a href="https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EB%B0%B1-49b400162/">백광민</a><br/>
            안드로이드 - <a href="https://www.linkedin.com/in/%EC%A4%80%ED%98%B8-%EC%86%8C-31a232150/">소준호</a><br/>
            신용준<br/>
            Sever - <a href="https://www.linkedin.com/in/rismme/">인상민</a><br/>
            <span style={{fontSize:'15px'}}>개발자를 누르시면 Linkdin으로 연결됩니다.</span>
          </div>
          <div className="footer__wrapper__copyright">
            <span className="footer__wrapper__copyright--text img">사진 저작권 - unsplash, 대한민국 국회</span><br />
            <span className="footer__wrapper__copyright--text cocktail">COPYRIGHT © 2018 COCKTAIL GLASS.</span>
          </div>
        </div>
      </footer>
    )
  }
}