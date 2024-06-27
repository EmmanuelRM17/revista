import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../compartidos/Estilos/revistas.css';
import Img from "../Imagenes/Revistad.png"
import { calcLength } from 'framer-motion';


const Revistas = () => {
  const [revistas, setRevistas] = useState([]);
  const API_KEY = '9a8036c32941f40db751183bfbebee21';
  const navigate = useNavigate();

  const href = (value) =>{
    if(value.url[0].format == "pdf"){
      return value.url[0].value
    }
    if(value.url[1].format == "pdf"){
      return value.url[1].value
    }
    if(value.url[2].format == "pdf"){
      return value.url[2].value
    }
  }

  useEffect(() => {
    const fetchRevistas = async () => {
      try {
        const response = await fetch(`https://api.springernature.com/meta/v2/json?q=journal&api_key=${API_KEY}`, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setRevistas(data.records);
      } catch (error) {
        console.error('Error fetching revistas:', error);
      }
    };

    fetchRevistas();
  }, [API_KEY]);

  const handleLeerMas = (revista) => {
    navigate('/revistacompleta', { state: { revista } });
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Revistas Científicas</h1>
   
        <div className="columns is-multiline">
          {revistas.map(revista => (
            <div className="column" key={revista.identifier}>
              <div className="card">
                <div className="card-content">
                  <div className="imagen-grid">
                    <img src={Img} alt="" 
                      className=''
                    />
                  </div>
                 
                  <p className="card-title">{revista.title}</p>
                  <p className="card-text">{revista.abstract.substring(0, 100)}...</p>
                  <div className="card-link">
                    <button onClick={() => handleLeerMas(revista)}>Leer más</button>
                    <a href={
                      href(revista)
                    } target='_blank' className='btn-descargar'>Descargar PDF</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Revistas;