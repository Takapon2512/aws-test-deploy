import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://localhost:80/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});