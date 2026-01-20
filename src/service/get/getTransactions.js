import { api } from "../api.js"

export const getTransactions = async (pagina, limite) => {

  try {

    const token = localStorage.getItem("token");

    const response = await api.get(`/api/transacoes?pagina=${pagina}&limite=${limite}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    return response.data.transacoes;

  } catch (error) {
    console.log("Algum Erro ocorreu");
    console.log(error);
  }
}
