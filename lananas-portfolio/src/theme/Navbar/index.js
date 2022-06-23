import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import LogoNav from '../../components/HomepageFeatures/LogoNav';

export default function Navbar() {
  return (
    <>
      <NavbarLayout>
        <LogoNav />
      </NavbarLayout>
      <div className="display-nav">
        <h1>Hello</h1>
        <h2>salut</h2>
        <h2>salut</h2>
      </div>
    </>
  );
}
