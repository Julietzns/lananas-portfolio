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
    </>
  );
}
