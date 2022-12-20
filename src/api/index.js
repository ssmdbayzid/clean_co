import axios from "axios";

const fetcher = axios.create({
    baseURL: "localhost:5000",    
})

export default fetcher;