import { createContext, useContext, useEffect, useState, useMemo } from "react";

import { getTransactions } from "../service/get/getTransactions";
import { getTotalPages } from "../service/get/getTotalPages.js"

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {

  const [page, setPage] = useState(0); // Diferente do componente Pagination, o componente TablePagination utiliza zero-based index, então a primeira pagina utiliza o index 0 e não 1 como em Pagination
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [open, setOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [addTransaction, setAddTransaction] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const { entradas, saidas } = useMemo(() => {

    let entradas = 0;
    let saidas = 0;

    if (transactions !== undefined) {
      transactions.forEach((element) => {
        if (element.tipo === "entrada") {
          entradas += element.valor;
        }
        else {
          saidas += element.valor;
        }
      });
    }
    else {
      console.log("Transacations is:" + typeof transactions);
    }

    return { entradas, saidas }
  }, [transactions])

  useEffect(() => {
    async function fetchTransactions() {
      const fetchedTransactions = await getTransactions(page + 1, rowsPerPage);
      if (fetchedTransactions !== undefined) {
        setTransactions(fetchedTransactions);
      }
      else {
        console.log("fetchedTransactions is: " + typeof fetchedTransactions);
      }
    }

    async function fetchTotalPages() {
      const fetchedTotalPages = await getTotalPages();
      if (fetchedTotalPages !== undefined) {
        setTotalPages(fetchedTotalPages);
      }
      else {
        console.log("fetchTotalPages is: " + typeof fetchedTotalPages)
      }
    }

    try {
      fetchTransactions();
      fetchTotalPages();
    } catch (error) {
      console.log(error);
    }


    // Função de cleanup depois de uma transação ser enviada para api, talvez tenha jeito melhor de fazer
    return () => {
      setAddTransaction(false);
    }
  }, [page, rowsPerPage, addTransaction]);

  return (
    <TransactionContext.Provider
      value={{
        open,
        setOpen,
        transactions,
        addTransaction,
        entradas,
        saidas,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        totalPages,
        setAddTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider >
  );
}

export function useTransaction() {
  return useContext(TransactionContext);
}

