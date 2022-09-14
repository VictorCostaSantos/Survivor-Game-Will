import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home   from './paginas/home/Home';
import Footer from './componentes/estaticos/footer/Footer';
import Login  from './paginas/login/Login';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CadastroUsuario from  './paginas/cadastrousuario/CadastroUsuario';
import Sobre from './paginas/sobre/Sobre';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />     
              <Route path="/login" element={<Login />} />    
              <Route path="/sobre" element={<Sobre />} />  
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;