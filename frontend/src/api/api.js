import axios from "axios"
import { useUserStore } from "../store/useUserStore"
const apiInstance = axios.create({
    baseURL: "https://kitek.ktkv.dev/marketplace/api/",
    headers: {
        "Content-Type": "application/json"
    }
})

apiInstance.interceptors.request.use((config) => {
    const { session } = useUserStore.getState() 


    if (session?.token) {
        config.headers.Authorization = `Bearer ${session.token}`
    }
    return config
})

const getItems = async () => {
    const data = await apiInstance.get("/items")
    return data.data
}


const registerUser = async (user) => {
    const res = await apiInstance.post("/auth/register", user)
    return res
}

const loginUser = async (user) => {
    const res = await apiInstance.post("/auth/login", user)
    return res
}

const createItem = async (item) => {
    const res = await apiInstance.post("/items", item)
    return res
}

export const api = {
    getItems,
    registerUser,
    loginUser,
    createItem
}
