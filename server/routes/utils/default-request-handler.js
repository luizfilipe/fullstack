import axios from 'axios'
import parse from 'parse-link-header'
import { HOST as host } from './constants'

export const defaultRequestHandler = async (path, res) => {
  try {
    const url = `${host}${path}`
    const { data, headers } = await axios
      .get(url)

    const result = headers.link ? {
      data,
      links: headers.link && parse(headers.link)
    } : data

    res
      .status(200)
      .json(result)
      .end()
  } catch (err) {
    res
      .status(err.response ? err.response.status : 500)
      .send(err)
      .end()
  }
}
