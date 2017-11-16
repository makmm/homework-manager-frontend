import React, {Component} from 'react'

import FontAwesome from 'react-fontawesome'

export default class Alert extends Component {
  style = {
    background: 'darkred',
    border: '3px fixed red',
    fontFamily: '\'Raleway\', Helvetica, Arial, sans-serif',
    textAlign: 'left',
    padding: '10px'
  }

  titleStyle = {
    paddingRight: '5px'
  }

  render(){
    return (
      <div style={this.style}>
        <p>
          <b style={this.titleStyle}>
            <FontAwesome name="exclamation-circle" /> {this.props.title}
          </b>
          {this.props.description}
        </p>
      </div>
    )
  }
}
