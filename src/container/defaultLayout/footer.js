import React from 'react';
import { facebook, linkdin, github } from './../../assets';
import './css/footer.scss';

export default class Footer extends React.Component{
  render(){
    return(
      <footer className="footer" style={{width:window.screen.width}}>
        <div className="footer__wrapper">
          <div className="footer__wrapper__icons">
            <a link="https://facebook.com"><img src={facebook} alt="facebook" className="footer__wrapper__icons__icon"/></a>
            <a link="https://github.com/team-cocktail-glass"><img src={github} alt="github" className="footer__wrapper__icons__icon"/></a>
            <a link="#"><img src={linkdin} alt="linkdin" className="footer__wrapper__icons__icon"/></a>
          </div>
          <div className="footer__wrapper__developer">
            Web Front, Design - 백광민<br/>
            안드로이드 - 소준호<br/>
            신용준<br/>
            Sever - 인상민
          </div>
          <div className="footer__wrapper__copyright">
            <span className="footer__wrapper__copyright--text img">사진 저작권 - unsplash</span><br />
            <span className="footer__wrapper__copyright--text cocktail">COPYRIGHT © 2018 COCKTAIL GLASS.</span>
          </div>
        </div>
      </footer>
    )
  }
}