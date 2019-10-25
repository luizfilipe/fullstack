import axios from 'axios'

export default () => {
  const { HOST, PORT } = process.env
  const baseURL = `${HOST}${PORT && `:${PORT}`}/api`
  console.log('API Endpoint:', baseURL)

  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
