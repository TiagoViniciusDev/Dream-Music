import axios from "axios"

const apiSearch = axios.create({
    baseURL: 'https://api.deezer.com/album/'
})


export default apiSearch