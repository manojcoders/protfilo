// Layout.jsx
import React, { useEffect, useState } from 'react';
import Preloader from './preloader';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  Show preloader for exactly 10 seconds
    const timer = setTimeout(() => setLoading(false), 1000); // 10,000ms = 10s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <Outlet />}
    </>
  );
};

export default Layout;
