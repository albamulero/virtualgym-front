import axios from "axios"
let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = "/api")
  : (baseURL = "http://192.168.1.200:3000/api")

const service = axios.create({ withCredentials: true, baseURL })

export const test = async () => {
  return await service.get("/")
}
export const signup = async user => {
  return await service.post("/adduser", user)
}
export const login = async user => {
  return await service.post("/login", user)
}
export const logOut = async () => {
  return await service.get("/logout")
}
export const getProfile = async () => {
  return await service.get("/profile")
}
export const facebookLogin = async () => {
  return await service.get("/auth/facebook")
}
//Alta de ejercicio
export const altaejercicio = async ejercicio => {
  return await service.post("/ejercicio/alta", ejercicio )
}
