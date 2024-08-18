/* JSX */
import React from "react";
import '../styles.css';
import imagebanner from '../images/imagebanner.png';

function Container() {
    return (
        <div className="principalcontainer">
          <img src={imagebanner} className="imagebanner" alt="Banner"/>
          <div className="texto">
            <span className="texto1">FUEGO BURGER, </span> <span className="texto2"> LA HAMBURGUESERIA MAS CHIMBA DE MEDALLO</span>
          </div>
        </div>
    );
}

export default Container;
