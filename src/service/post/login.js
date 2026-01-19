import { api } from "../api.js";

export const login = async (user, password) => {

  try {
    const json = {
      "login": user,
      "senha": password
    }
    const response = await api.post("/api/login", json);
    console.log(response);
    return response.status;

  } catch (error) {
    console.log(error.response.status)
    return error.response.status;
  }
}
