import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8881/"
})

export default api