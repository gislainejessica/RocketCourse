import axios from 'axios'
const api = axios.create({baseURL: 'http://192.168.15.8:4003/api'})
export default api;

// Depois de bater muito a cabeça , descobri que essa baseUrl é que estava errada