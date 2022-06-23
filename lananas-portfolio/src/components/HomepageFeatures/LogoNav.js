import React from 'react';
import clsx from 'clsx';
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
// import feuille from "lananas-portfolio/static/img/feuilles.png";
import plant from "/static/img/feuilles.png";
import headVecto from "/static/img/tete_vecto.png"

export default function LogoNav() {
  return (
    <>

        {/* <img src={Logodev} alt="logo dev" width="100%" /> */}
        <div className="elem-ban">

            {/* partie feuillasse */}
            <img src={plant} className="plant-ban" alt="feuille-nav" />

            {/* partie tete vecto */}
            <img src={headVecto} className="headvecto-ban" alt="head-vecto" />
    
            <div className="logos-icons">
            {/* partie logos */}
            <a href="https://gitlab.com/froggit" target="_blank" rel="noreferrer">
                <FaBehance className="icons" />
                </a>

                <a href="https://gitlab.com/froggit" target="_blank" rel="noreferrer">
                <FaGithub className="icons" />
                </a>

                <a href="https://gitlab.com/froggit" target="_blank" rel="noreferrer">
                <FaLinkedin className="icons" />
                </a>
            </div>
        </div>
    </>
  )
}
