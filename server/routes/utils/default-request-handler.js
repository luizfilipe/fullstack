import axios from 'axios'
import { HOST as host } from './constants'

export const defaultRequestHandler = async (path, res) => {
  try {
    const { data } = await axios
      .get(`${host}${path}`)
    res
      .status(200)
      .json(data)
      .end()
  } catch (err) {
    res
      .status(err.response ? err.response.status : 500)
      .send(err)
      .end()
  }
}
