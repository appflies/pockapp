import axios from 'axios';

export default async function Login(username: string, password: string) {
  const data = {
    usuario: username,
    password: password
  };

  try {
    const response = await axios.post("https://nicoservices.clobitech.com/usuarios/login", data, {
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    } else {
      return { error: 'Error de conexión' };
    }
  }
}