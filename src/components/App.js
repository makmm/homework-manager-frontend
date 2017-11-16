import React, {Component} from 'react'

import './app.css'

import Navbar from './nav/Navbar'
import Main from './Main'

import LoginService from '../services/LoginService'
import ProfileService from '../services/ProfileService'

export default class App extends Component {
  loginService = new LoginService()
  profileService = new ProfileService()

  componentDidMount = () => {
    this.loginService.checkSession()
      .then(res => {
        if(res.data.success){
          this.profileService.getProfile()
            .then(() => this.forceUpdate())
        }
      })
  }

  render(){
    return (
      <div>
        <Navbar
          loginService={this.loginService}
          profileService={this.profileService}
        />
        <Main
          loginService={this.loginService}
          profileService={this.profileService}
        />
      </div>
    )
  }
}
