import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


export default function FormularioCadastro({ aoEnviar }) {
  
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);


  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();

          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }}
      >

        <TextField
          value={nome}
          onChange={event => { setNome(event.target.value); }}
          id="nome"
          label="Nome" F
          variant="outlined"
          margin="normal"
          fullWidth />

        <TextField
          value={sobrenome}
          onChange={event => { setSobrenome(event.target.value); }}
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={cpf}
          onChange={event => { setCpf(event.target.value); }}
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControlLabel
          label="Receber promoções"
          control={
            <Switch
              checked={promocoes}
              onChange={event => { setPromocoes(event.target.checked) }}
              name="promocoes"
              color="primary"
            />
          }
        />

        <FormControlLabel
          label="Receber novidades"
          control={
            <Switch
              checked={novidades}
              onChange={event => { setNovidades(event.target.checked) }}
              name="novidades"
              color="primary"
            />
          }
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          margin="normal"
          fullWidth>
          Cadastrar
        </Button>
      </form>
    </>
  );
}