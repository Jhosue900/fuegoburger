import React from "react";
import '../styles.css';
import instagram from '../images/instagram.png';
import facebook from "../images/facebook.png";

function Footer() {
    return (
        <div>
            <div className="horarioscontainer">
                <center>
                    <br />
                    <h1 className="menutext">HORARIOS</h1>
                    <br />
                    <br />
                    <span className="daystitle">LUNES A DOMINGO</span>
                    <br />
                    <span className="horarios">4PM - 10PM</span>
                    <br />
                    <span className="daystitle">VIERNES Y SABADOS</span>
                    <br />
                    <span className="horarios">4PM - 11PM</span>
                </center>
                <br />
                <br />
            </div>
            <br />
            <center>
                <div className="instagram">
                    <a href="https://www.instagram.com/fuegoburger.med?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram Icon" className="icon" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61564273013016&locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook Icon" className="icon" />
                    </a>
                </div>
            </center>
            <br />
        </div>
    );
}

export default Footer;
