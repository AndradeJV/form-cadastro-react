import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


export default function DadosEntrega() {
  return (
    <>
      <form>
        <TextField
          id="cep"
          label="Digite seu CEP"
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          id="endereco"
          label="Digite seu endereço"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          id="numero"
          label="Digite o número do seu endereço"
          type="number"
          variant="outlined"
          margin="normal"
        />

        <TextField
          id="estado"
          label="Digite seu estado"
          type="text"
          variant="outlined"
          margin="normal"
        />

        <TextField
          id="cidade"
          label="Digite sua cidade"
          type="text"
          variant="outlined"
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          margin="normal"
          fullWidth
        >
          Finalizar cadastro
        </Button>
      </form>
    </>
  );
}