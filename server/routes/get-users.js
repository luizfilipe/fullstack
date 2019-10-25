import axios from 'axios'
import { format } from 'url'
import { last } from 'lodash'
import { HOST as host } from './utils/constants'

export const getUsers = async ({ query }, res, next) => {
  try {
    const { data: users } = await axios.get(format({
      host,
      pathname: '/users',
      query
    }))

    res
      .status(200)
      .json({
        users,
        next: last(users).id
      })
      .end()
  } catch (err) {
    res
      .status(err.response ? err.response.status : 500)
      .send(err)
      .end()
  }
  next()
}
