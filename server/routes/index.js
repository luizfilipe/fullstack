import express from 'express'
import { getUsers } from './get-users'
import { getUserDetails } from './get-user-details'
import { getUserRepos } from './get-user-repos'

export const router = new express.Router()
router.get('/users', getUsers)
router.get('/users/:username/details', getUserDetails)
router.get('/users/:username/repos', getUserRepos)
