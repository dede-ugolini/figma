import { useState } from "react";
import NewTransection from "../NewTransection";
import Transactions from "./Transactions";
import SearchBar from "./SearchBar";

export default function TransactionsContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  /* NOTE: Esssa função ficou inutilizada depois de implementar a filtragem */

  /* function addTransaction(newTransaction) {
    setTransactions(prev => [...prev, newTransaction]);
  }  */

  const filteredSearch = transactions.filter(t => t.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <Transactions transactions={filteredSearch} />
      <NewTransection onAddTransaction={(t) =>
        setTransactions(prev => [...prev, t])
      }
      />
    </>
  );
}
