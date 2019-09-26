const axios = require('axios')
const api = axios.create({baseURL: 'http://localhost:4003/api'})
export default api