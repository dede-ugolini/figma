import { api } from "../api.js"

export const getTotalPages = async (pagina, limite) => {

  try {

    const token = localStorage.getItem("token");

    const response = await api.get(`/api/transacoes?pagina=${pagina}&limite=${limite}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    return response.data.paginacao.total;

  } catch (error) {
    console.log("Algum Erro ocorreu");
    console.log(error);
  }
}
