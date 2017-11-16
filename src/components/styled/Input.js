import React from 'react'

import styled from 'styled-components'

const Input = styled.input`
  display: inline-block;
  background: Transparent;
  box-shadow: none;
  border: 3px solid #AAA;
  font-size: 18px;
  width: 35%;
  padding: 10px;
  color: white;
  text-align: center;
  margin: 2% 20px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;

  transition: .6s;
  box-shadow: 0px 0px 0px #AAA;

  @media screen and (max-width: 900px) {
    display: block;
    width: 86%;
    margin: 2% auto;
  }

  &:hover {
    transition: .6s;
    box-shadow: 0px 0px 8px #AAA;
  }
`

export default Input
