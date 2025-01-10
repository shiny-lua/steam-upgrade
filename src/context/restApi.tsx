import axios from "axios";
import { config } from ".";
axios.defaults.baseURL = config.BACKEND_URL + '/api/';
axios.defaults.withCredentials = true;

const restApi = {
  postRequest: async (url: string, data?: any) => {
    const result = await axios.post(url, data)
    return result.data
  },

  setAuthToken: (token: string) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  },

  signin: async () => {
    const result = await axios.get("/auth/steam")
    return result.data
  },

  loginStatus: async (authToken: any) => {
    const result = await axios.post("loginStatus", {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authToken
      }
    })
    console.log(result)

    return result.data
  },
}

export { restApi };