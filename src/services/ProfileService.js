import axios from 'axios'

import Service from './Service.js'

export default class ProfileService extends Service {
  profile = {}

  getProfile = async () => {
    const req = axios.get(
      this.API_HOST + '/login/profile',
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }
    )

    const res = await req

    this.profile = res.data.profile

    console.log(this.profile)

    return req
  }
}
