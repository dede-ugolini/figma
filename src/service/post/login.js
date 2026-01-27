import { api } from "../api.js";

export const login = async (user, password) => {

  try {
    const json = {
      "login": user,
      "senha": password
    }
    const response = await api.post("/api/login", json, {
      skipAuthLogin: true,
    });

    const token = response.data.token;
    const refreshToken = response.data.refreshToken;
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);

    return response.status;

  } catch (error) {
    console.log("Erro ao efetuar login");
    console.log("User: " + user + " " + "password: " + password);
    console.log("Status: " + error.response.status);
    console.log(error.response.data.erro);
    return error.response.status;
  }
}
