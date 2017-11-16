import React, {Component} from 'react'

import CenteredTitle from './../styled/CenteredTitle'
import CenteredContainer from './../styled/CenteredContainer'
import Input from './../styled/Input'
import Button from './../styled/Button'
import Alert from './../styled/Alert'
import NotLoggedIn from './NotLoggedIn'

export default class Profile extends Component {
  constructor(props){
    super(props)

    this.loginService = props.loginService
    this.profileService = props.profileService

    this.state = {
      alert: {
        show: false,
        title: 'Error',
        description: ''
      }
    }
  }

  setAlert(title, description){
    return this.setState({
      alert: {
        show: true,
        title: title,
        description: description
      }
    })
  }

  renderAlert(){
    if(this.state.alert.show)
      return (
        <div>
          <Alert
            title={this.state.alert.title}
            description={this.state.alert.description}
          />
        </div>
      )
    else
      return (
        <div></div>
      )
  }

  render(){
    const profile = this.profileService.profile

    if(this.loginService.loggedIn)
      return (
        <CenteredContainer>
          {this.renderAlert()}
          <CenteredTitle>
            Profile
          </CenteredTitle>
          <b>Username</b>: {profile.username}<br/>
          <b>Email</b>: {profile.email}
        </CenteredContainer>
      )
    else return (
      <NotLoggedIn />
    )
  }
}
