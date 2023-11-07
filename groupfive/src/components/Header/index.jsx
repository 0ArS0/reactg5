import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import Logo from '../../assets/logo.png';

export default function HeaderMain() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="theader">
        <div className="container">
          <div className="logo">
            <Link to='/'>
              <img src={Logo} style={{ width: '22vh' }} />
            </Link>
          </div>
          {windowWidth <= 600 ? (
            <div className="menu-mobile">
              <div className="mobile-menu" onClick={toggleMobileMenu}>
                <img src="src/assets/pacman-icon.png"/>
                {/* ☰ */}
              </div>
              {isMobileMenuOpen && (
                <div className="mobile-menu-items">
                  <div className="mobile-menu" onClick={toggleMobileMenu}>
                    <img src="src/assets/pacman-icon.png"/>
                  </div>
                  <div className="seila">
                    <Link className="menuItem1" to="/produtos">Produtos</Link>
                    <Link className="menuItem" to="/contato">Contato</Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="menu">
              <Link className="menuItem" to="/produtos">Produtos</Link>
              <Link className="menuItem" to="/contato">Contato</Link>
            </div>
          )}
        </div>
      </div>
      <div className="mheader">
        <div className="auxMenu">
          <Link className="auxItem" to="/produtos/camisas">Camisas </Link>
          •
          <Link className="auxItem" to="/produtos/decoracao">Decoração </Link>
          •
          <Link className="auxItem" to="/produtos/acessorios">Acessórios </Link>
          •
          <Link className="auxItem" to="/quiz">Geek Quiz </Link>
          •
          <Link className="auxItem" to="/tradutor">Tradutor Geek </Link>
        </div>
      </div>
    </header>
  );
}
