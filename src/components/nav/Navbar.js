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
  render(){
    if(!this.props.isLoggedIn)
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
          <span>
            Welcome, {this.props.profile.username}!
          </span>
        </Item>
      )
  }
}

export default class Navbar extends Component {
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
            isLoggedIn={this.props.isLoggedIn}
            profile={this.props.profile}
          />
        </Items>
      </Nav>
    )
  }
}
