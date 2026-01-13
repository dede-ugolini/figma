import { createContext, useContext, useState } from "react";

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [entradas, setEntradas] = useState(0);
  const [saidas, setSaidas] = useState(0);

  function addTransaction(transaction) {
    setTransactions(prev => [...prev, transaction]);

    if (transaction.type === "entrada") {
      setEntradas(prev => prev + transaction.price);
    } else {
      setSaidas(prev => prev + transaction.price);
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        open,
        setOpen,
        transactions,
        addTransaction,
        entradas,
        saidas
      }}
    >
      {children}
    </TransactionContext.Provider >
  );
}

export function useTransaction() {
  return useContext(TransactionContext);
}

