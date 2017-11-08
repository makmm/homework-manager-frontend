import axios from 'axios'

import Service from './Service.js'

export default class LoginService extends Service {
  login(info){
    return axios.post(
      this.API_HOST + '/login/session',
      info
    )
  }
}