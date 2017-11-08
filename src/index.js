import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Navbar from './views/nav/Navbar.js'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      view: 'About'
    }
  }

  handleNavClick(){

  }

  render(){
    return (
      <div>
        <Navbar
          view={this.state.view}
          handleClick={this.handleNavClick}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)