import { useState } from "react"

import { login } from "../service/post/login";

export default function useLogin() {

  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (user, password) => {
    const status = await login(user, password);

    if (status === 200) {
      setMessage("Login bem sucedido!")
      setOpen(true);
      setSuccess(true);
      setTimeout(() => {
        setLogged(true);
      }, 1000);
    }

    else if (status === 401) {
      setMessage("Credenciais inválidas!");
      setLogged(false)
      setOpen(true);
      setSuccess(false);
    }

    else if (status === 500) {
      setMessage("Erro de servidor!");
      setLogged(false)
      setOpen(true);
      setSuccess(false);
    }

    else {
      setMessage("Algum erro ocorreu, tente novamente mais tarde!");
      setLogged(false);
      setOpen(true);
      setSuccess(false);
    }
  }

  return {
    open,
    logged,
    success,
    message,
    handleLogin
  };
}
