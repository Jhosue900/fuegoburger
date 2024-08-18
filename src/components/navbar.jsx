import React from "react";
import "../styles.css"; // Importa la hoja de estilos
import logo from '../images/icon.png';
import shopping from '../images/online-shopping.png';
import w from '../images/w.png'

function NavbarCode() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">FUEGO BURGER</span>
      </div>
      <div className="headline">
        <h2 className="num1"><img src={w} alt="Logo" className="w" />DE BARRIO </h2>
        <h2 className="num2"> PERO ELEGANTE</h2>
      </div>
    </nav>
  );
}

export default NavbarCode;
