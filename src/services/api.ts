import axios, { AxiosInstance } from "axios";

export const http: AxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
})
