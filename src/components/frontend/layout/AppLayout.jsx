import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;