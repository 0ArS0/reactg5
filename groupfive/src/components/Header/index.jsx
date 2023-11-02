import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Back from '../../assets/logo.png';

export default function HeaderMain() {

  return (
    <header>
      <div className="theader">
        <div className="container">
          <div className="logo">
            <Link to='/'>
              <img src={Back} style={{ width: '280px', marginLeft: '-80px', marginTop: '60px' }} />
            </Link>
          </div>
          <div className="menu">
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/extra">Extra</Link>
          </div>
        </div>
      </div>
      <div className="mheader">
      </div>
    </header>
  );
}
