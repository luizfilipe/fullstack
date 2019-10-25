import { format } from 'url'
import { defaultRequestHandler } from './utils/default-request-handler'

export const getUserRepos = async ({ params, query }, res, next) => (
  defaultRequestHandler(format({
    pathname: `/users/${params.username}/repos`,
    query
  }), res).then(next)
)
