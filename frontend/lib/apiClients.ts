import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://10.0.1.40:80/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});