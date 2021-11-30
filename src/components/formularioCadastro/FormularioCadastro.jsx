import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


export default function FormularioCadastro() {
  return (
    <>
      <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />
      <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
      <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />

      <FormControlLabel label="Receber promoções" control={ <Switch name="promocoes" defaultChecked color="primary" />} />
      <FormControlLabel label="Receber novidades" control={ <Switch name="novidades" defaultChecked color="primary" />} />

      <Button type="submit" variant="contained" color="primary" margin="normal" fullWidth>
        Cadastrar
      </Button>
    </>
  );
}