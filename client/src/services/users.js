import api from './api'
import { format } from 'url'

export const getUsers = async query => api().get(format({
  pathname: '/users',
  query: {
    ...query,
    per_page: 15
  }
}))

export const getUserDetail = async username => api().get(`/users/${username}/details`)
