import React from 'react'

import {Link} from 'react-router-dom'

import Title from './../styled/Title'
import Description from './../styled/Description'

const NotLoggedIn = () => (
  <div>
    <Title>You aren't logged in.</Title>
    <Description>
      Maybe try <Link to="/login">logging in</Link>?
    </Description>
  </div>
)

export default NotLoggedIn
