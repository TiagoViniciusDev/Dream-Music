import axios from "axios"

const apiSearch = axios.create({
    baseURL: 'https://api.deezer.com/search?q='
})


export default apiSearch