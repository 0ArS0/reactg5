import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Logo from '../../assets/logo.png';
import Instagram from '../../assets/instagram_logo.png'
import Email from '../../assets/email_icon.png'

export default function Footer() {

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="logo">
            <img src={Logo} style={{ width: '18vh', marginTop: '1.5vh' }} />
          </div>
          <p>Group Five <Link to='/produtosAdmin'>&copy;</Link> - Nem todos os direitos reservados.</p>
          <div className="footerItems">
            <div className="footerSocial">
              <div className="footerSocialImg">
                <a href="mailto:groups2five@gmail.com? subject=teste" target="blank"><img src={Email} /></a>
                <a href="https://www.instagram.com/groups2five/" target="blank"><img src={Instagram} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
