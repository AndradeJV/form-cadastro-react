import React, { useState } from 'react';

import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

import validarEtapa from '../../functions/validarEtapa';


export default function FormularioCadastro({ aoEnviar, validarCPF }) {

  const [etapaAtual, setEtapaAtual] = useState(0);

  return (
    <>
      { validarEtapa(etapaAtual) }
    </>
  );
}