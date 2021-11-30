import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


export default function FormularioCadastro({ aoEnviar, validarCPF }) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const [erros, setErros] = useState({ cpf: { valido: true, texto:"" } });

  
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
          onBlur={event => {
            const isValid = validarCPF(cpf);

            setErros({ cpf: isValid });
          }}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          id="cpf"
          label="Digite seu cpf (apenas números)"
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