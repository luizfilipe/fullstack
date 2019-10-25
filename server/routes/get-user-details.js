import { defaultRequestHandler } from './utils/default-request-handler'

export const getUserDetails = ({ params }, res, next) => (
  defaultRequestHandler(`/users/${params.username}`, res).then(next)
)
