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
                        <a href="mailto:groups2five@gmail.com? subject=teste" target="blank">groups2five@gmail.com</a>
                        <a href="mailto:groups2five@gmail.com? subject=teste" target="blank"><img src="" alt="" /> email</a>
                        <a href="www.instagram.com/teste" target="blank"><img src="" alt="" /> insta</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
