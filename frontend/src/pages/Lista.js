import React, { useEffect, useState } from 'react';
import Lista from '../components/Lista';
import FormularioModal from '../components/FormularioModal';
import api from '../services/api';

function PaginaLista() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [editando, setEditando] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const carregar = async () => {
    try {
      const res = await api.get('/restaurante');
      setRestaurantes(res.data);
    } catch (err) {
      console.error('Erro ao carregar restaurantes:', err);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  const handleEditar = (restaurante) => {
    setEditando(restaurante);
    setShowModal(true);
  };

  const handleFechar = () => {
    setEditando(null);
    setShowModal(false);
  };

  return (
    <>
      <Lista
        restaurantes={restaurantes}
        carregarRestaurantes={carregar}
        setEditando={handleEditar}
      />

      {editando && (
        <FormularioModal
          show={showModal}
          handleClose={handleFechar}
          carregarRestaurantes={carregar}
          editando={editando}
          setEditando={setEditando}
        />
      )}
    </>
  );
}

export default PaginaLista;
