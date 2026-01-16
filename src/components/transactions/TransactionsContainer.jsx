import Stack from "@mui/material/Stack";

import { useState } from "react";

import { useTransaction } from "../../context/TransactionContext";
import Saldo from "../Saldo";
import SearchBar from "./SearchBar";
import Transactions from "./Transactions";

export default function TransactionsContainer() {
  const [search, setSearch] = useState("");
  const { transactions, entradas, saidas } = useTransaction();

  const filteredSearch = transactions.filter(t => t.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Saldo entradas={entradas} saidas={saidas} total={entradas - saidas} />
      <SearchBar search={search} setSearch={setSearch} />
      <Stack sx={{ width: "100%" }}>
        <Transactions transactions={filteredSearch} />
      </Stack>
    </>
  );
}
