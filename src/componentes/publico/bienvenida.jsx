import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bulma/css/bulma.min.css';
import '../css/style.css';
import { articulos } from '../../data';
import { Page, Text, View, Document, Image, StyleSheet, pdf } from '@react-pdf/renderer';

const defaultImage = 'https://via.placeholder.com/150';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  author: {
    fontSize: 14,
    marginBottom: 10
  },
  description: {
    fontSize: 12,
    marginBottom: 10
  },
  image: {
    marginBottom: 10
  }
});

const Welcome = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const news = articulos;

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{selectedNews.titulo}</Text>
        <Text style={styles.author}>Autor: {selectedNews.autor}</Text>
        {/* <Image style={styles.image} src={selectedNews.img || defaultImage} /> */}
        <Text style={styles.description}>{selectedNews.descripcion}</Text>
        <Text style={styles.description}>{selectedNews.parrafo1}</Text>
        <Text style={styles.description}>{selectedNews.parrafo2}</Text>
        <Text style={styles.description}>{selectedNews?.parrafo3}</Text>
      </Page>
    </Document>
  );

  const openModal = (article) => {
    setSelectedNews(article);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setModalOpen(false);
  };

  const openPdfInNewTab = async () => {
    const blob = await pdf(<MyDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const cardStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '300px',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    objectFit: 'contain'
  };

  return (
    <section className="hero" style={{ backgroundColor: '#6a6f77', padding: '10px 0', minHeight: '70vh' }}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="title has-text-white" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              Bienvenido Yare
            </h1>
            <h2 className="subtitle has-text-white" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              Las mejores revistas interactivas en un solo lugar.
            </h2>
            <div className="columns is-multiline is-centered">
              {news && news.map((article, index) => (
                <div key={index} className="column is-one-third">
                  <div className="card" style={cardStyle} onClick={() => openModal(article)}>
                    <img
                      src={article.img || defaultImage}
                      alt={article.titulo}
                      style={imageStyle}
                    />
                    <h3 style={{ marginTop: '15px', fontSize: '1.2rem' }}>{article.titulo}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {modalOpen && selectedNews && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', backgroundColor: 'white', color: 'black', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h3 className="title is-3" style={{ color: 'black' }}>{selectedNews.titulo}</h3>
            <div className="content">
              <p><strong style={{ color: 'black' }}>Autor:</strong> {selectedNews.autor}</p>
              <p>{selectedNews.descripcion}</p>
              <img src={selectedNews.img} alt={selectedNews.title} style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '10px' }} />
              <button className="button is-primary" onClick={openPdfInNewTab}> PDF</button>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
      )}
    </section>
  );
};

export default Welcome;
