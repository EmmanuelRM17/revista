import React from 'react';
import { useLocation } from 'react-router-dom';


const RevistaCompleta = () => {
  const location = useLocation();
  const { revista } = location.state;

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{revista.title}</h1>
        <h2 className="subtitle">{revista.publicationName}</h2>
        <div className="content">
          <p>{revista.abstract}</p>
          {revista.url && (
            <p>
              <a href={revista.url} target="_blank" rel="noopener noreferrer">Leer en el sitio web</a>
            </p>
          )}
        </div>
      </div>  
    </section>
  );
};

export default RevistaCompleta;
