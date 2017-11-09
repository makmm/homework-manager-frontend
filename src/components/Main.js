import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SomethingWentWrong from './views/SomethingWentWrong'

import About from './views/About'
import Login from './views/Login'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </main>
)

export default Main