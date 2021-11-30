export default function validarCpf(cpf) {
  if (cpf.length !== 11) 
    return { valido: false, texto: "O CPF deve conter 11 dígitos" };
  
  else 
    return { valido: true, texto: "" };
}