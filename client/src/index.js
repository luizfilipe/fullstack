import fs from 'fs'
import env from 'dotenv'
import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { NotFound, Repos, Users, User } from './pages'
import { GlobalStyle } from './reset-css'
const envConfig = env.parse(fs.readFileSync('.env'))
for (const k in envConfig) {
  process.env[k] = envConfig[k]
}

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Users />
          </Route>
          <Route path='/user/:username/repos'>
            <Repos />
          </Route>
          <Route path='/user/:username'>
            <User />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

const App = document.getElementById('client-website')

ReactDOM.render(<Router />, App)
