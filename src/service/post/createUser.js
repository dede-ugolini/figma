import { api } from "../api.js"

export const createUser = async (user, password) => {

  const json = {
    "login": user,
    "senha": password,
  }

  try {
    const response = await api.post("/api/criar-conta", json);
    console.log(response)
    return response.status
  } catch (error) {
    console.log(error)
    return error.response.status
  }
}

createUser();
