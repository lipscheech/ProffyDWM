import axios from "axios";

const api = axios.create({
  baseURL: "https://proffy-api.gabrielcarvalh6.repl.com",
});

export default api;
