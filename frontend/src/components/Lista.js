import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import api from '../services/api';

function Lista({ restaurantes, carregarRestaurantes, setEditando }) {
  const excluirRestaurante = async (idrestaurante) => {
    if (window.confirm('Tem certeza que deseja excluir este restaurante?')) {
      try {
        await api.delete(`/restaurante/${idrestaurante}`);
        carregarRestaurantes();
      } catch (error) {
        console.error('Erro ao excluir restaurante:', error);
      }
    }
  };

  return (
    <Table striped bordered hover responsive className="mt-3 shadow-sm bg-white rounded">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th>Tipo de Cozinha</th>
          <th>Avaliação</th>
          <th className="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        {restaurantes.length === 0 ? (
          <tr>
            <td colSpan="7" className="text-center">Nenhum restaurante cadastrado.</td>
          </tr>
        ) : (
          restaurantes.map((restaurante) => (
            <tr key={restaurante.idrestaurante}>
              <td>{restaurante.idrestaurante}</td>
              <td>{restaurante.nome}</td>
              <td>{restaurante.telefone}</td>
              <td>{restaurante.endereco}</td>
              <td>{restaurante.tipo_cozinha}</td>
              <td>{restaurante.avaliacao}</td>
              <td className="text-center">
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => setEditando(restaurante)}
                >
                  <PencilFill />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => excluirRestaurante(restaurante.idrestaurante)}
                >
                  <TrashFill />
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default Lista;
