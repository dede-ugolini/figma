import { Card } from "@mui/material";

function Transactions({ transactions }) {
  return (
    <div>
      {transactions.map((t, index) => (
        <Card key={index}>
          <h4>{t.description}</h4>
          <p>{t.category}</p>
          <p>{t.type === "income" ? "Entrada" : "Saída"}</p>
          <p>R$ {t.price}</p>
          <p>{new Date(t.date).toLocaleDateString()}</p>
        </Card>
      ))}
    </div>
  );
}

export default Transactions;
