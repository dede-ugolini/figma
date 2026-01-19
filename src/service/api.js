import axios from "axios"

export const api = axios.create({
  baseURL: "http://72.60.54.143:3000/",
  timeout: 1000,
})
