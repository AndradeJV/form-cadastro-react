import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


export default function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');


  return (
    <>
      <form onSubmit={event => {
        console.log(nome, sobrenome);

        event.preventDefault();
      }}
      >

        <TextField
          value={nome}
          onChange={ event => {
            let temporariaNome = event.target.value;

            if (nome.length >= 10) temporariaNome = nome.substr(0, 10);
            
            setNome(temporariaNome);
          }}

          id="nome"
          label="Nome"F
          variant="outlined"
          margin="normal"
          fullWidth />

        <TextField
          value={sobrenome}
          onChange={event => {
            let temporariaSobrenome = event.target.value;

            if (sobrenome.length >= 30) temporariaSobrenome = sobrenome.substr(0, 30);

            setSobrenome(temporariaSobrenome);
          }}

          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControlLabel label="Receber promoções" control={<Switch name="promocoes" defaultChecked color="primary" />} />
        <FormControlLabel label="Receber novidades" control={<Switch name="novidades" defaultChecked color="primary" />} />

        <Button type="submit" variant="contained" color="primary" margin="normal" fullWidth>
          Cadastrar
        </Button>
      </form>
    </>
  );
}