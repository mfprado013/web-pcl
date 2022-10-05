import axios from 'axios'

export function getAPIClient(ctx?: any) {

  const api = axios.create({
    baseURL: process.env.baseURL
  })
  
  return api
}
