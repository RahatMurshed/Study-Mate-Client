import axios from "axios";


const instance = axios.create({
    // baseURL: 'https://assaignment-10-server-nu.vercel.app'
    baseURL: 'http://localhost:3000'
})

const useAxios = () => {
    return instance;
};

export default useAxios;