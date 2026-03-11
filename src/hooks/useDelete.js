import { deleteTransactions } from "../service/delete/deleteTransactions.js";
import { useTransaction } from "../context/TransactionContext";
import { useState } from "react";

export default function useDelete() {

  const { setAddTransaction } = useTransaction();

  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCloseAlert = () => {
    setOpenAlert(false);
  }

  const handleOpenAlert = () => {
    setOpenAlert(true);
  }

  const handleDelete = async (id) => {

    const status = await deleteTransactions(id);

    if (status === 200) {
      setMessage("Transação deletada com sucesso!");
      setSuccess(true);
      setOpenAlert(true);
      setAddTransaction(true);
      setAddTransaction(true);
    }
    else if (status === 401) {
      setMessage("Não autorizado!");
      setSuccess(false);
      setOpenAlert(true);
    }
    else if (status === 404) {
      setMessage("Transação não encontrada!");
      setSuccess(false);
      setOpenAlert(true);
    }
    else if (status === 500) {
      setMessage("Erro interno de servidor, tente novamente mais tarde");
      setSuccess(false);
      setOpenAlert(true);
    }
    else {
      setMessage("Algum erro ocorreu, tente novamente mais tarde!");
      setSuccess(false);
      setOpenAlert(true);
    }
  }

  return { openAlert, message, success, handleDelete, handleCloseAlert, handleOpenAlert };
}
