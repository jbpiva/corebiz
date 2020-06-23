export default function validateNews(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Preencha com um e-mail válido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Preencha com um e-mail válido";
  }
  if (!values.name) {
    errors.name = "Preencha com seu nome";
  } else if (values.name.length < 10) {
    errors.name = "Preencha com seu nome completo";
  }
  return errors;
}