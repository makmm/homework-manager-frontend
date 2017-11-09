import axios from 'axios'

import Service from './Service.js'

export default class ProfileService extends Service {
  getProfile(){
    return axios.get(
      this.API_HOST + '/login/profile'
    )
  }
}
