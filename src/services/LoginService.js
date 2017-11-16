import axios from 'axios'

import Service from './Service.js'

export default class LoginService extends Service {
  loggedIn = false

  checkSession = async () => {
    const req = axios.get(
      this.API_HOST + '/login/session'
    )

    this.loggedIn = (await req).data.success

    return req
  }

  login = async (info) => {
    const req = axios.post(
      this.API_HOST + '/login/session',
      info
    )

    const res = await req

    if(res.data.success){
      localStorage.setItem('jwtToken', res.data.token)
      this.loggedIn = true
    }

    return req
  }
}
