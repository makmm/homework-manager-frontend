import React from 'react'

import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'Oswald', Helvetica, Arial, sans-serif;
`

const Description = styled.p`
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
`

const SomethingWentWrong = () => (
  <div>
    <h1>Something went TERRIBLY WRONG!!</h1>
    <p>Just kidding, but you should seriously <a href="http://bit.ly/2yhvWpz">report this issue</a>. </p>
  </div>
)

export default SomethingWentWrong
