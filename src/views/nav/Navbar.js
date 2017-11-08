import React from 'react'

import './navbar.css'

import NavButton from './NavButton.js'

export default class Navbar extends React.Component {
  render(){
    return (
      <nav>
        <NavButton 
          text="homework-manager"
          view="About"
          currentView={this.props.view}
          onClick={this.props.handleClick}
        />
        <NavButton 
          text="Login"
          view="Login"
          currentView={this.props.view}
          onClick={this.props.handleClick}
        />
      </nav>
    )
  }
}