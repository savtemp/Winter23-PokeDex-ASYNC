// @ts-ignore
export const sandboxAPI = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 2500
})
// @ts-ignore
export const pokeAPI = axios.create({
  baseURL: 'https://pokeapi.co',
  timeout: 2500,
  // NOTE sets parameters around what you receive back from the network tab, dependent on what your API supports 
  params: {
    limit: 10000,
  }
})