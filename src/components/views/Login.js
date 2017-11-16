import React, {Component} from 'react'

import {Redirect} from 'react-router'

import CenteredTitle from './../styled/CenteredTitle'
import CenteredContainer from './../styled/CenteredContainer'
import Input from './../styled/Input'
import Button from './../styled/Button'
import Alert from './../styled/Alert'

export default class Login extends Component {
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

  setAlert(title, description){
    return this.setState({
      alert: {
        show: true,
        title: title,
        description: description
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const formData = {
      username: e.target.username.value,
      password: e.target.password.value
    }

    if(!formData.username)
      return this.setAlert(
        'Error',
        'You need to put something on the username field.'
      )
    else if(!formData.password)
      return this.setAlert(
        'Error',
        'You need to put something on the password field.'
      )

    // Easter Egg ;)
    if(
      formData.username === 'something' ||
      formData.password === 'something'
    ) return this.setAlert(
        'Easter Egg',
        'You aren\'t supposed to literally put \'something\' in the fields, silly!'
      )

    this.loginService.login(formData)
      .then(async res => {
        await this.profileService.getProfile()
        this.forceUpdate()
      })
      .catch(err => {
        if(err.request.status === 401)
          return this.setAlert(
            'Error',
            'Wrong username and/or password.'
          )
        else
          return this.setAlert(
            'Error',
            '(probably backend) Unknown error. Report this issue @ http://bit.ly/2yhvWpz.'
          )
      })
      .catch(err => {
        this.setAlert(
          'Error',
          'Frontend unknown error. Report this issue @ http://bit.ly/2yhvWpz.'
        )
        throw err
      })
  }

  render(){
    if(this.loginService.loggedIn)
      return <Redirect push to="/" />

    return (
      <div>
        <CenteredTitle>Login</CenteredTitle>
        <CenteredContainer>
          {this.renderAlert()}
          <form action="" onSubmit={this.onSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="Username"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
            />
            <Button>
              Login
            </Button>
          </form>
        </CenteredContainer>
      </div>
    )
  }
}
