import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LayoutConEncabezado from './componentes/compartidos/layout';
import Welcome from './componentes/publico/bienvenida';
import Revistas from './componentes/revistas/revistas';
import RevistaCompleta from './componentes/revistas/revistacompleta';
import Colecciones from './componentes/colecciones/colecciones';
import Component from './componentes/compartidos/AcercaDe';
import Noticias from './componentes/compartidos/noticias'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutConEncabezado><Welcome /></LayoutConEncabezado>} />
        <Route path="/revistas" element={<LayoutConEncabezado><Revistas /></LayoutConEncabezado>} />
        <Route path="/categoria/noticias" element={<LayoutConEncabezado><Noticias /></LayoutConEncabezado>} />
        <Route path="/categoria/tecnologia" element={<LayoutConEncabezado><Noticias /></LayoutConEncabezado>} />
        <Route path="/revistacompleta" element={<LayoutConEncabezado><RevistaCompleta /></LayoutConEncabezado>} />
        <Route path="/colecciones" element={<LayoutConEncabezado><Colecciones /></LayoutConEncabezado>} />
        <Route path="/about" element={<LayoutConEncabezado><Component/></LayoutConEncabezado>} />
      </Routes>
    </Router>
  );
}

export default App;
