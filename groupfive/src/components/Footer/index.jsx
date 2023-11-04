import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Logo from '../../assets/logo.png';

export default function Footer() {

    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="logo">
                        <Link to='/'>
                            <img src={Logo} style={{ width: '100px' }} />
                        </Link>
                    </div>
                    <p>Group Five &copy; - Todos os direitos reservados.</p>
                    <div className="footerItems">
                        <p className="footerItem">Entre em contato conosco:</p>
                        <div className="footerSocial">

                        <a href="mailto:groups2five@gmail.com? subject=teste" target="blank"><img src="src/assets/email2_icon.png" alt="" /></a>
                        <a href="https://www.instagram.com/groups2five/" target="blank"><img src="src/assets/instagram_logo.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
