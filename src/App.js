import React from 'react';
import { Container, Typography } from '@material-ui/core';

import './App.css';

import FormularioCadastro from './components/formularioCadastro/FormularioCadastro';
import envioFormulario from './functions/envioFormulario';
import validarCpf from './functions/validarCpf';


function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center"> Formulário de cadastro </Typography>
      {<FormularioCadastro aoEnviar={envioFormulario} validarCPF={validarCpf}/>}
    </Container>
  );
}


export default App;