import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <NavbarLayout>
      <NavbarContent />
        <a href="https://gitlab.com/froggit" target="_blank" rel="noreferrer">
              <FaBehance className="nav_icons" />
        </a>
        <a href="https://gitlab.com/froggit" target="_blank" rel="noreferrer">
              <FaGithub className="nav_icons" />
        </a>
        <a href="https://gitlab.com/froggit" target="_blank" rel="noreferrer">
              <FaLinkedin className="nav_icons" />
        </a>
      </NavbarLayout>
    </>

  );
}
