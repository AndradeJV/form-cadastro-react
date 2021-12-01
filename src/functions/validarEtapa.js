import { Typography } from '@material-ui/core';

import DadosPessoais from '../components/formularioCadastro/DadosPessoais';
import DadosUsuario from '../components/formularioCadastro/DadosUsuario';
import DadosEntrega from '../components/formularioCadastro/DadosEntrega';


export default function validarEtapa(etapa) {
  switch (etapa) {
    case 0:
      return <DadosUsuario />

    case 1:
      return <DadosPessoais />

    case 2:
      return <DadosEntrega />

    default:
      return <Typography>Erro ao selecionar formulário </Typography>
  }
}