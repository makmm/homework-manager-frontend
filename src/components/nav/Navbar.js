import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import './navbar.css'

export default class Navbar extends Component {
  renderAccountStuff = () => {
    if(!this.props.isLoggedIn)
      return (
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
      )
    else
      return (
        <li>
          <span>
            Welcome, {this.props.profile.username}!
          </span>
        </li>
      )
  }

  render(){
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              homework-manager
            </Link>
          </li>
          <div className="right">
            {this.renderAccountStuff()}
          </div>
        </ul>
      </nav>
    )
  }
}
