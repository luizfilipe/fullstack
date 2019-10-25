import './index'
import axios from 'axios'
import test from 'ava'
import { head } from 'lodash'

test('get all users should have 30', async t => {
  const result = await axios.get('http://localhost:3002/api/users')
  t.is(result.data.users.length, 30)
})

test('get all users since an id should have the expected next one', async t => {
  const result = await axios.get('http://localhost:3002/api/users?since=46')
  t.is(head(result.data.users).id, 47)
})

test('get a user details', async t => {
  const result = await axios.get('http://localhost:3002/api/users/luizfilipe/details')
  t.is(result.data.login, 'luizfilipe')
})

test('get user repos', async t => {
  const result = await axios.get('http://localhost:3002/api/users/luizfilipe/repos')
  t.is(result.data.length, 30)
})
