import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from './images/logo.svg';
import { ReactComponent as MeaseringIcon } from './images/measering.svg';
import { ReactComponent as CalculationIcon } from './images/calculation.svg';
import './nav.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <LogoIcon className="logo-icon" />
        </Link>
      </div>

      <nav className="menu">
        <Link to="/services">Сервис</Link>
        <Link to="/products">Товары</Link>
        <Link to="/about">О нас</Link>
        <Link to="/portfolio">Портфолио</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
      
    </div>
  );
}

export default Navbar;
