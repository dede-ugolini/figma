import { createTransactions } from "../service/post/createTransactions";
import { useState } from "react";
import { useTransaction } from "../context/TransactionContext";

export default function useNewTransaction() {

  const [success, setSuccess] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");

  const { setPage, setRowsPerPage, setAddTransaction } = useTransaction();

  const handleCloseAlert = () => {
    setOpenAlert(false);
  }

  const handleOpenAlert = () => {
    setOpenAlert(true);
  }

  const handleChangePage = (newPage) => {
    setPage(parseInt(newPage));
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const handleNewTransaction = async (description, price, category, type) => {

    const status = await createTransactions(description, parseInt(price), category, type);

    if (status == 201) {
      setMessage("Transação realizada com sucesso!");
      setSuccess(true);
      setOpenAlert(true);
      setAddTransaction(true);
    }

    else if (status === 400) {
      setMessage("Dados inválidos");
      setSuccess(false);
      setOpenAlert(true);
    }

    else if (status === 401) {
      setMessage("Não autorizado");
      setSuccess(false);
      setOpenAlert(true);
    }

    else if (status === 500) {
      setMessage("Erro interno de servidor!");
      setSuccess(false);
      setOpenAlert(true);
    }

    else {
      setMessage("Algum erro ocorreu, tente novamente mais tarde");
      setSuccess(false);
      setOpenAlert(true);
    }

  }
  return {
    success,
    openAlert,
    message,
    handleNewTransaction,
    handleCloseAlert,
    handleOpenAlert,
    handleChangePage,
    handleChangeRowsPerPage
  };
}
