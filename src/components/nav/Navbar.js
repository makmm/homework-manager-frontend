import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import styled from 'styled-components'

const Nav = styled.nav`
  background: #222;
  position: fixed;
  z-index: 100;
  width: 100%;
`

const Items = styled.ul`
  list-style: none;
  overflow: hidden;
`

const Item = styled.li`
  float: left;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-size: 16px;
  transition: .6s;
  background: Transparent;

  &:hover {
    transition: .6s;
    background: #333;
  }

  &:last-of-type {
    float: right;
  }
`

const StyledLink = styled(Link)`
  display: block;
  padding: 15px;
  color: white !important;
  text-decoration: none;
`

class AccountItem extends Component {
  constructor(props){
    super(props)

    this.loginService = props.loginService
    this.profileService = props.profileService
  }

  render(){
    if(!this.loginService.loggedIn)
      return (
        <Item>
          <StyledLink to="/login">
            Login
          </StyledLink>
        </Item>
      )
    else
      return (
        <Item>
          <StyledLink to="/profile">
            Welcome, {this.profileService.profile.username}!
          </StyledLink>
        </Item>
      )
  }
}

export default class Navbar extends Component {
  constructor(props){
    super(props)

    this.loginService = props.loginService
    this.profileService = props.profileService
  }

  render(){
    return (
      <Nav>
        <Items>
          <Item>
            <StyledLink to="/">
              homework-manager
            </StyledLink>
          </Item>
          <AccountItem
            loginService={this.loginService}
            profileService={this.profileService}
          />
        </Items>
      </Nav>
    )
  }
}
