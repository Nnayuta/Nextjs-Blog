import axios from "axios";
import { parseCookies } from "nookies";

const { 'blog-token': token } = parseCookies();

const ApiAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
});

if (token) {
    ApiAxios.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default ApiAxios;