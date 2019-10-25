import axios from 'axios'

export default () => {
  const { HOST, PORT } = process.env
  const baseURL = `${HOST}${PORT && `:${PORT}`}/api`

  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
