import { format } from 'url'
import { defaultRequestHandler } from './utils/default-request-handler'

export const getUsers = ({ query }, res, next) => {
  defaultRequestHandler(format({
    pathname: '/users',
    query
  }), res).then(next)
}
