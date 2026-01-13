import { useState } from "react";
import NewTransection from "./NewTransection";
import Transactions from "./Transactions";
import SearchBar from "./SearchBar";
import Saldo from "../Saldo"

export default function TransactionsContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [entradas, setEntradas] = useState(0);
  const [saidas, setSaidas] = useState(0);

  /* NOTE: Esssa função ficou inutilizada depois de implementar a filtragem */

  /* function addTransaction(newTransaction) {
    setTransactions(prev => [...prev, newTransaction]);
  }  */

  const filteredSearch = transactions.filter(t => t.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Saldo entradas={entradas} saidas={saidas} total={entradas - saidas} />
      <SearchBar search={search} setSearch={setSearch} />
      <Transactions transactions={filteredSearch} />
      <NewTransection setValueEntrada={setEntradas} setValueSaida={setSaidas} onAddTransaction={(t) =>
        setTransactions(prev => [...prev, t])
      }
      />
    </>
  );
}
