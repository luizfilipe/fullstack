import api from './api'
import { format } from 'url'

export const getReposFromUser = async (username, query) => api().get(format({
  pathname: `/users/${username}/repos`,
  query: {
    ...query,
    per_page: 15
  }
}))

