import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-VTEX-API-AppKey": `${process.env.vtex_app_key}`,
    "X-VTEX-API-AppToken": `${process.env.vtex_app_token}`,
  },
});

export default api;
