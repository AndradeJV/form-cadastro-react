import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


export default function DadosUsuario() {
  return (
    <>
      <form>
        <TextField
          id="email"
          label="Digite seu email"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          id="senha"
          label="Digite sua senha"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          margin="normal"
          fullWidth
        >
          Cadastrar
        </Button>

      </form>
    </>
  );
}