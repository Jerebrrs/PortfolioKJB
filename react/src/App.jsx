import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './componentes/inicio/Inicio'
import SobreMi from './componentes/SobreMi/SobreMi'
import Proyectos from './componentes/Proyectos/Proyectos'

import Navbar from './componentes/navbar/Navbar'
import Skills from './componentes/skills/Skills'
import Contacto from './componentes/contacto/Contacto'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
