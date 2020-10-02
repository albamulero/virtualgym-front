import axios from "axios"
let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = "https://virtualgymreact.herokuapp.com/api")
  : (baseURL = "http://localhost:3000/api")

const service = axios.create({baseURL, withCredentials: true  })

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

//Alta de ejercicio
export const altaejercicio = async ejercicio => {
  return await service.post("/ejercicio/alta", ejercicio )
}

//GOOGLE
export const googleSigup= async () => {
  return await service.get("/auth/google")
}

//Listar ejercicios
export const listarejercicio = async ejercicio => {
  return await service.get("/ejercicio/listado", ejercicio )
}

// Buscar ejercicio - pasamos el ID del ejercicio ---- devuelve un Json con el ejercicio buscado
export const buscarejercicio = async (id) =>{
  return await service.get(`/ejercicio/buscar/${id}` )
}

//Borrar ejercicios
export const borrarejercicio = async (id) =>{
  return await service.get(`/ejercicio/baja/${id}` )
}


export const calentamiento = async ejercicio => {
  return await service.get("/ejercicio/calentamiento", ejercicio )
}
export const estiramientos = async ejercicio => {
  return await service.get("/ejercicio/estiramientos", ejercicio )
}

export const pesas = async ejercicio => {
  return await service.get("/ejercicio/pesas", ejercicio )
}
export const ligas = async ejercicio => {
  return await service.get("/ejercicio/ligas", ejercicio )
}
export const banco = async ejercicio => {
  return await service.get("/ejercicio/banco", ejercicio )
}
export const barra = async ejercicio => {
  return await service.get("/ejercicio/barra", ejercicio )
}
export const cuerpocompleto = async ejercicio => {
  return await service.get("/ejercicio/cuerpocompleto", ejercicio )
}
export const cuadriceps = async ejercicio => {
  return await service.get("/ejercicio/cuadriceps", ejercicio )
}
export const gemelos = async ejercicio => {
  return await service.get("/ejercicio/gemelos", ejercicio )
}
export const bicepsinferior = async ejercicio => {
  return await service.get("/ejercicio/bicepsinferior", ejercicio )
}
export const gluteos = async ejercicio => {
  return await service.get("/ejercicio/gluteos", ejercicio )
}
export const bicepssuperior = async ejercicio => {
  return await service.get("/ejercicio/bicepssuperior", ejercicio )
}
export const triceps = async ejercicio => {
  return await service.get("/ejercicio/triceps", ejercicio )
}
export const abdominales = async ejercicio => {
  return await service.get("/ejercicio/abdominales", ejercicio )
}
export const pecho = async ejercicio => {
  return await service.get("/ejercicio/pecho", ejercicio )
}



