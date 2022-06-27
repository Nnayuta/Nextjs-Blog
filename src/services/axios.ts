import axios from "axios";
import { parseCookies } from "nookies";

const { 'blog-token': token } = parseCookies();

export const AxiosAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
});

if (token) {
    AxiosAPI.defaults.headers['Authorization'] = `Bearer ${token}`;
}