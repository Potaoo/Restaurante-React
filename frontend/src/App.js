import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Lista from './pages/Lista';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <div className="container flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/cadastrar" element={<Cadastro />} />
          </Routes>
        </div>

        <Footer />
        <ToastContainer position="top-center" />
      </div>
    </Router>
  );
}

export default App;
