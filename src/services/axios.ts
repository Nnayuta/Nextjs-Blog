import axios from "axios";
import { parseCookies } from "nookies";

export const AxiosAPI = axios.create({
    baseURL: '/'
});

const { 'blog-token': token } = parseCookies();

if (token) {
    AxiosAPI.defaults.headers['Authorization'] = `Bearer ${token}`;
}