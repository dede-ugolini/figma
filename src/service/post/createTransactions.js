import { api } from "../api.js";

export const createTransactions = async (description, price, category, type) => {

  try {

    const token = localStorage.getItem("token");

    const response = await api.post("/api/transacoes", {
      "nome": description,
      "valor": price,
      "categoria": category,
      "tipo": type,
    }, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    console.log("Transação enviada para a api")
    console.log(response);

    return response.status;

  } catch (error) {

    console.log(error);
  }
}
