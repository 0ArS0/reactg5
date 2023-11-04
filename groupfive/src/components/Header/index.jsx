import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Logo from '../../assets/logo.png';

export default function HeaderMain() {

  return (
    <header>
      <div className="theader">
        <div className="container">
          <div className="logo">
            <Link to='/'>
              <img src={Logo} style={{ width: '22vh'}} />
            </Link>
          </div>
          <div className="menu">
            <Link className="menuItem" to="/sobre">Produtos</Link>
            <Link className="menuItem" to="/contato">Contato</Link>
          </div>
        </div>
      </div>
      <div className="mheader">
        <div className="auxMenu">
          <Link className="auxItem" to="/camisas">Camisas </Link>
          •
          <Link className="auxItem" to="/decoracao">Decoração </Link>
          •
          <Link className="auxItem" to="/acessorios">Acessórios</Link>
        </div>
      </div>
    </header>
  );
}
