import axios from 'axios';

const axiosInstance = axios.create({
    // old account
    baseURL: 'https://www.digitalcappuccino.ca/',
    timeout: 30000,
});

export default axiosInstance;