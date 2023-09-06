import  axios from 'axios'
export const axiosClient = axios.create({
    baseURL : process.env.REACT_APP_URL_BACKEND,
    headers : {
        common : {
            Authorization : `Bearer ${process.env.REACT_APP_SERVER_TOKEN}`
        }
    }
})