import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import Instagram from '../../assets/instagram_logo.png'
import Email from '../../assets/email_icon.png'
import './style.css';

export default function Footer() {

  return (
    <footer>
      <div className="footerItems">
        <div className="logo">
          <img src={Logo} style={{ width: '18vh', marginTop: '1.5vh' }} />
        </div>
        <div className="texto-footer">
          <p>Group Five <Link to='/produtosAdmin'>&#x00AE;&#xFE0F;</Link> - Nem todos os direitos reservados.</p>
        </div>
        <div className="footerSocialImg">
          <a href="mailto:groups2five@gmail.com? subject=teste" target="blank"><img src={Email} /></a>
          <a href="https://www.instagram.com/groups2five/" target="blank"><img src={Instagram} /></a>
        </div>
      </div>
    </footer>
  );
}
