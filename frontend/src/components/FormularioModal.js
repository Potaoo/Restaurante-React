import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import api from '../services/api';

function FormularioModal({ show, handleClose, carregarRestaurantes, editando, setEditando }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tipoCozinha, setTipoCozinha] = useState('');
  const [avaliacao, setAvaliacao] = useState('');

  useEffect(() => {
    setNome(editando?.nome || '');
    setTelefone(editando?.telefone || '');
    setEndereco(editando?.endereco || '');
    setTipoCozinha(editando?.tipo_cozinha || '');
    setAvaliacao(editando?.avaliacao || '');
  }, [editando]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoRestaurante = {
      nome,
      telefone,
      endereco,
      tipo_cozinha: tipoCozinha,
      avaliacao,
    };

    try {
      if (editando && editando.idrestaurante) {
        await api.put(`/restaurante/${editando.idrestaurante}`, novoRestaurante);
        toast.success('Restaurante atualizado com sucesso!');
      } else {
        await api.post('/restaurante', novoRestaurante);
        toast.success('Restaurante cadastrado com sucesso!');
      }

      carregarRestaurantes();
      handleClose();
      setEditando(null);
    } catch (error) {
      console.error('Erro ao salvar restaurante:', error);
      toast.error('Erro ao salvar restaurante');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editando ? 'Editar Restaurante' : 'Adicionar Restaurante'}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Tipo de Cozinha</Form.Label>
            <Form.Control
              value={tipoCozinha}
              onChange={(e) => setTipoCozinha(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Avaliação</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={avaliacao}
              onChange={(e) => setAvaliacao(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default FormularioModal;
