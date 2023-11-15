 import axios from 'axios'

 const BASE_URL = "https://33srd5-4000.csb.app"

 const axiosInstance = axios.create({baseURL: BASE_URL}); 

axios.interceptors.response.use(
    (response) => response, 
    (err) => 
    Promise.reject(
        (err.response && err.response.data) || "something went wrong"
        )
)

export default axiosInstance; 