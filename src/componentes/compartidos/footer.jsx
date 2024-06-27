import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer has-background-white has-text-black">
      <div className="content has-text-centered" style={{ borderTop: '1px solid white', borderBottom: '1px solid white', padding: '2rem 0' }}>
        <div className="columns">
          <div className="column">
            
            <p>Nuestra misión es ofrecerte las mejores revistas interactivas y contenido exclusivo en una variedad de categorías.</p>
          </div>
          <div className="column">
            <p>Únete a nuestra comunidad y mantente informado con nuestras últimas publicaciones:</p>
            <div className="buttons is-centered">
              <Link className="button is-link" to="/subscribe">Suscríbete</Link>
              <Link className="button is-info" to="/contact">Contáctanos</Link>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <p>Síguenos en nuestras redes sociales:</p>
          <div className="buttons is-centered">
            <a className="button is-light" href="https://facebook.com" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="button is-light" href="https://twitter.com" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="button is-light" href="https://instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="button is-light" href="https://linkedin.com" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

        </div>
        <p>© 2024 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
