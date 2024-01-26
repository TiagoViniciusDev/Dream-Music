import axios from "axios"

const apiSearch = axios.create({
    baseURL: 'https://corsproxy.io/?https://api.deezer.com/album/'
})


export default apiSearch