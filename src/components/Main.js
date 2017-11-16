import React from 'react'
import {Switch, Route} from 'react-router-dom'

import SomethingWentWrong from './views/SomethingWentWrong'

import About from './views/About'
import Login from './views/Login'
import Profile from './views/Profile'

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path='/' component={About} />
      <Route
        exact
        path='/login'
        render={
          () =>
            <Login
              loginService={props.loginService}
              profileService={props.profileService}
            />
        }
      />
      <Route
        exact
        path='/profile'
        render={
          () =>
            <Profile
              loginService={props.loginService}
              profileService={props.profileService}
            />
        }
      />
      <Route path='*' component={SomethingWentWrong} />
    </Switch>
  </main>
)

export default Main
