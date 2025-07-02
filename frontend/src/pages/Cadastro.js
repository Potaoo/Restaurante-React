import React, { useState } from 'react';
import FormularioModal from '../components/FormularioModal';

function Cadastro() {
  const [show, setShow] = useState(true);

  const fechar = () => setShow(false);
  const carregarRestaurantes = () => {}; // mock

  return (
    <FormularioModal
      show={show}
      handleClose={fechar}
      carregarRestaurantes={carregarRestaurantes}
      editando={null}
      setEditando={() => {}}
    />
  );
}

export default Cadastro;
