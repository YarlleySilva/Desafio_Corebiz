import axios from "axios";

const baseUrl = "https://corebiz-test.herokuapp.com/api/v1";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;