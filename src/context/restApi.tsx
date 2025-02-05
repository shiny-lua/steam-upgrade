import axios from "axios";
import { config } from ".";
import Cookies from "js-cookie";

axios.defaults.baseURL = config.BACKEND_URL + '/api/';
axios.interceptors.request.use((config) => {
  const token = Cookies.get("authToken")
  console.log("token", token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const restApi = {
  postRequest: async (url: string, data?: any) => {
    const result = await axios.post(url, data)
    return result.data
  }
}

export { restApi };