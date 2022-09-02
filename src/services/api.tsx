import axios from "axios";

//Usado o Axios para fazer as requisições a API "PokeAPI"

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
});

export default api;