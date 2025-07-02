import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="text-center">
      <h1 className="mb-4">Bem-vindo ao Gerenciador de Restaurantes 🍽️</h1>
      <p className="lead mb-4">Aqui você pode visualizar e gerenciar todos os restaurantes cadastrados.</p>
      <div>
        <Button as={Link} to="/lista" variant="primary" className="me-3">
          Ver Restaurantes
        </Button>
        <Button as={Link} to="/cadastrar" variant="success">
          Cadastrar Novo
        </Button>
      </div>
    </div>
  );
}

export default Inicio;
