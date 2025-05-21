import axios from "axios";
import { config } from ".";
import Cookies from "js-cookie";

axios.defaults.baseURL = config.BACKEND_URL + '/api/client';
axios.interceptors.request.use((config) => {
  const token = Cookies.get("authToken")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const restApi = {
  postRequest: async (url: string, data?: any) => {
    try {
      const result = await axios.post(url, data)
      return result.data
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw {
          status: error.response.status,
          message: error.response.data.message || 'An error occurred',
          data: error.response.data
        }
      } else if (error.request) {
        // The request was made but no response was received
        throw {
          status: 500,
          message: 'No response from server',
          data: null
        }
      } else {
        // Something happened in setting up the request
        throw {
          status: 500,
          message: error.message || 'An error occurred',
          data: null
        }
      }
    }
  }
}

export { restApi };