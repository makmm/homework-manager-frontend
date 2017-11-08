import React from 'react'

import './nav-button.css'

export default class Navbutton extends React.Component {
  render(){
    let classes = ""

    classes += "nav-button "

    if(this.props.view === this.props.currentView)
      classes += "nav-button-active"

    return (
      <button 
        className={classes}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    )
  }
}