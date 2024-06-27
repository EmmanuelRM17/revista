import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'bulma/css/bulma.min.css';
import '../css/style.css';
import img from '../Imagenes/Noticias.jpg';

// URL de la imagen estática a mostrar cuando una noticia no tiene imagen
const defaultImage = img;

const translations = {
    'Author': 'Autor',
    'Published at': 'Publicado en',
    'Content': 'Contenido',
    'Source': 'Fuente',
    'URL': 'Enlace'
};

const translate = (text) => {
    return translations[text] || text;
};

const Noticias = () => {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const apiKey = '751301d9fc9b40e3b217f3f024092d93';
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const translatedArticles = data.articles.map(article => ({
                    ...article,
                    title: translateText(article.title),
                    description: translateText(article.description),
                    content: translateText(article.content),
                    author: translateText(article.author),
                    source: {
                        ...article.source,
                        name: translateText(article.source.name)
                    }
                }));
                setNews(translatedArticles);
            })
            .catch(error => {
                console.error('Error al obtener las noticias:', error);
            });
    }, []);

    const translateText = (text) => {
        // Aquí puedes usar cualquier método de traducción, esto es un ejemplo simple
        // En producción, deberías usar una API de traducción
        if (!text) return '';
        return text.replace(/Author|Published at|Content|Source|URL/gi, matched => {
            return translations[matched] || matched;
        });
    };

    const openModal = (article) => {
        setSelectedNews(article);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedNews(null);
        setModalOpen(false);
    };

    const cardStyle = {
        cursor: 'pointer',
        backgroundColor: 'white', // Fondo blanco
        color: 'black', // Letras negras
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '400px', // Mínima altura para todas las cards
    };

    const imageContainerStyle = {
        position: 'relative',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '10px',
    };

    const imageOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Sombreado oscuro semi-transparente
        zIndex: 1,
        borderRadius: '10px',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        maxHeight: '300px',
        borderRadius: '10px',
        objectFit: 'cover',
        maxWidth: '100%',
        zIndex: 0, // Asegura que la imagen esté detrás del sombreado
    };

    return (
        <section className="hero" style={{ backgroundColor: '#6A6F77', padding: '40px 0', minHeight: '80vh' }}>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="title has-text-white" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                            Noticias
                        </h1>
                        <div className="columns is-multiline is-centered is-vcentered">
                            {news && news.map((article, index) => (
                                <div key={index} className="column is-one-third" onClick={() => openModal(article)}>
                                    <div className="card" style={cardStyle}>
                                        <div style={imageContainerStyle}>
                                            <div style={imageOverlayStyle}></div>
                                            <motion.img
                                                src={article.urlToImage || defaultImage}
                                                alt={article.title}
                                                style={imageStyle}
                                                whileHover={{ scale: 1.05 }}
                                            />
                                        </div>
                                        <h3 style={{ marginTop: '15px', fontSize: '1.2rem', zIndex: 2 }}>{article.title}</h3>
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
                        <h3 className="title is-3" style={{color: 'black'}}>{selectedNews.title}</h3>
                        <div className="content">
                            <p><strong style={{color: 'black'}}>{translate('Author')}:</strong> {selectedNews.author}</p>
                            <p><strong style={{color: 'black'}}>{translate('Published at')}:</strong> {selectedNews.publishedAt}</p>
                            <p>{selectedNews.description}</p>
                            <p><strong style={{color: 'black'}}>{translate('Content')}:</strong> {selectedNews.content}</p>
                            <p><strong style={{color: 'black'}}>{translate('Source')}:</strong> {selectedNews.source.name}</p>
                            {selectedNews.urlToImage && (
                                <img src={selectedNews.urlToImage} alt={selectedNews.title} style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '10px' }} />
                            )}
                            <p><strong style={{color: 'black'}}>{translate('URL')}:</strong> <a href={selectedNews.url} target="_blank" rel="noopener noreferrer">{selectedNews.url}</a></p>
                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
                </div>
            )}
        </section>
    );
};

export default Noticias;
