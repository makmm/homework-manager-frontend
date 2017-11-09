import axios from 'axios'

import Service from './Service.js'

export default class LoginService extends Service {
  isLoggedIn = false

  checkSession = async () => {
    const req = axios.get(
      this.API_HOST + '/login/session'
    )

    this.isLoggedIn = (await req).data.success

    return req
  }

  login = async (info) => {
    const req = axios.post(
      this.API_HOST + '/login/session',
      info
    )

    if((await req).data.success)
      this.isLoggedIn = true

    return req
  }
}
