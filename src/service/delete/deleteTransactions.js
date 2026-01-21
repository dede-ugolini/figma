import { api } from "../api.js";

export const deleteTransactions = async (id) => {
  try {

    const token = localStorage.getItem("token");

    const response = await api.delete(`/api/transacoes/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    })
    console.log(response.status);

    return response.status;
  } catch (error) {
    console.log("Erro ocorreu ao deletar transação");
    console.log(error)
  }
}
