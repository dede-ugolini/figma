import { useState } from "react";

import { createUser } from "../service/post/createUser.js"

export default function useRegister() {

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClickClose = () => {
    setOpen(false);
  }

  const handleRegister = async (user, password) => {

    const status = await createUser(user, password);

    if (status == 201) {
      setMessage("Usuário cadastrado com sucesso!");
      setOpenAlert(true);
      setSuccess(true);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }

    else if (status == 400) {
      setMessage("Usuário existente");
      setOpenAlert(true);
      setSuccess(false);
    }

    else if (status == 500) {
      setMessage(" Erro interno de servidor, tente novamente mais tarde");
      setOpenAlert(true);
      setSuccess(false);
    }

    else {
      setMessage("Algum erro ocorreu, tente novamente mais tarde");
      setOpenAlert(true);
      setSuccess(false);
    }
  }

  return {
    open,
    success,
    openAlert,
    message,
    handleRegister,
    handleClickClose,
    handleClickOpen
  };
}
