import { useState } from "react";
import Transactions from "./Transactions";
import SearchBar from "./SearchBar";
import Saldo from "../Saldo"
import { useTransaction } from "../../context/TransactionContext";

export default function TransactionsContainer() {
  const [search, setSearch] = useState("");
  const { transactions, entradas, saidas } = useTransaction();

  const filteredSearch = transactions.filter(t => t.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Saldo entradas={entradas} saidas={saidas} total={entradas - saidas} />
      <SearchBar search={search} setSearch={setSearch} />
      <Transactions transactions={filteredSearch} />
    </>
  );
}
