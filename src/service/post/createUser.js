import { api } from "../api.js"

export const createUser = async (user, password) => {

  const json = {
    "login": user,
    "senha": password,
  }

  try {
    const response = await api.post("/api/criar-conta", json);
    console.log("Usuário criado com sucesso");
    console.log(response)
    return response.status
  } catch (error) {
    console.log("Erro ao criar usuário");
    console.log(error)
    return error.response.status
  }
}
