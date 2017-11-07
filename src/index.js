import axios from 'axios'

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props){
    super(props)
   
    this.API_HOST = process.env.REACT_APP_API_HOST

    this.state = {
      data: ''
    }
  }

  getData(){
    return axios.get(
      this.API_HOST + '/data'
    )
      .then(res => {
        this.setState({
          data: res.data.data
        })
      })
      .catch(err => {
        this.setState({
          error: JSON.stringify(err)
        })
      })
  }

  refreshData(){
    return Promise.all([
      this.getData()
    ])
  }

  componentDidMount(){
    this.refreshData()
  }

  render(){
    const data = this.state.data ? this.state.data : 'Cargando...'

    return (
      <div>
        <h3>Error: {this.state.error}</h3>
        <h1>
          La data es {data}
        </h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)