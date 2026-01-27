import axios from "axios"

export const api = axios.create({
  baseURL: "http://72.60.54.143:3000/",
  timeout: 1000,
})

async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await api.post("/api/refresh-token", {
    "refreshToken": refreshToken,
  });
  const token = response.data.token;
  localStorage.setItem("token", token);
}

api.interceptors.response.use(
  function onFulFilled(response) {
    return response;
  },
  async function onReject(error) {
    const status = error.status;
    if (status === 401 && !error.config.skipAuthLogin) {
      await refreshToken();
      error.config.headers.Authorization = "Bearer " + localStorage.getItem("token");
      return api(error.config);
    }
    return Promise.reject(error);
  });

