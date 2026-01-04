import axios from "axios";


const instance = axios.create({
    baseURL: 'https://assaignment-10-server-nu.vercel.app'
   
})

const useAxios = () => {
    return instance;
};

export default useAxios;