import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const LayoutConEncabezado = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default LayoutConEncabezado;
