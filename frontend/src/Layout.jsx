import React from 'react';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import { Outlet } from 'react-router-dom';

const Layout = () => { // Use "const" and correct the function definition
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterSection /> 
    </div>
  );
};

export default Layout;
