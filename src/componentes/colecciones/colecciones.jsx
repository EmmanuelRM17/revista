import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../compartidos/Estilos/revistas.css';

const Colecciones = () => {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const API_KEY = '9a8036c32941f40db751183bfbebee21';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(`https://api.springernature.com/meta/v2/json?q=categories&api_key=${API_KEY}`, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setCategorias(data.records);
      } catch (error) {
        console.error('Error fetching categorias:', error);
      }
    };

    fetchCategorias();
  }, [API_KEY]);

  const handleSelectCategoria = (categoria) => {
    setSelectedCategoria(categoria);
  };

  const handleLeerMas = (revista) => {
    navigate('/revistacompleta', { state: { revista } });
  };

  return (
    <section className="section">
      <div className="container">
        <div>
        <h1 className="title">Categorías Científicas</h1>
        </div>
        <div className="menu">
          {categorias.map(categoria => (
            <button
              key={categoria.identifier}
              className="menu-item"
              onClick={() => handleSelectCategoria(categoria)}
            >
              {categoria.title}
            </button>
          ))}
        </div>
        {selectedCategoria && (
          <div className="columns is-multiline">
            {selectedCategoria.revistas.map(revista => (
              <div className="column" key={revista.identifier}>
                <div className="card">
                  <div className="card-content">
                    <p className="card-title">{revista.title}</p>
                    <p className="card-text">{revista.abstract.substring(0, 100)}...</p>
                    <div className="card-link">
                      <button onClick={() => handleLeerMas(revista)}>Leer más</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Colecciones;
