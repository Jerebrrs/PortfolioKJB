import './App.css'
import Inicio from './componentes/inicio/Inicio'
import SobreMi from './componentes/SobreMi/SobreMi'
import Proyectos from './componentes/Proyectos/Proyectos'
import Navbar from './componentes/navbar/Navbar'
import Skills from './componentes/skills/Skills'
import Contacto from './componentes/contacto/Contacto'
import { BrowserRouter } from 'react-router-dom';
import Footer from './componentes/footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Inicio />
        <SobreMi />
        <Proyectos />
        <Skills />
        <Contacto />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
