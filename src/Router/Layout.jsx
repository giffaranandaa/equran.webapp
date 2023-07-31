import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BackToTop from '../components/BackToTop';

const Layout = () => {
  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="main-content relative">
        <Outlet/>
        <BackToTop />
      </div>
    </div>
  );
};

export default Layout;
