import React from 'react'

import styled from 'styled-components'

const Button = styled.button`
  display: block;
  transition: .6s;
  background: #AAA;
  box-shadow: none;
  border: none;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  color: black;
  text-align: center;
  margin: 2% auto;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;

  transition: .6s;
  box-shadow: 0px 0px 0px #AAA;

  @media screen and (max-width: 900px) {
    margin: 2% 0;
  }

  &:hover {
    transition: .6s;
    background: #CCC
    transition: .6s;
    box-shadow: 0px 0px 8px #AAA;
  }

`

export default Button
