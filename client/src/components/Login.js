import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'




export default class Login extends Component {
    state = {
      users: [],
      newUser: {
        userName: ''
      }
    }

// the users are displayed 
componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

  // handles the change function
  handleChange = (event) => {
    const newUser = { ...this.state.newUser }
    newUser[event.target.name] = event.target.value
    this.setState({ newUser })
  }

  // handle the submit function
  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/users', this.state.newUser)

    const users = [...this.state.users]
    users.push(response.data)
    this.setState({ users })
  }

  // turns the userName into a link and tells it where to go once you click on it
  render() {
    const usersList = this.state.users.map((user, i) => {
      console.log(user)
      return (
        <div>
             <Link to={`/users/${user._id}/visions`}>
            Name: {user.userName}
          </Link>
        </div>
      )
    })

    // style the Login page
    // what you need to have when you come to the Login page
    // has the Create New User button
    return (
      <div>
        <h1>Login Page</h1>
        {usersList}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='userName'
            value={this.state.newUser.userName}
            onChange={this.handleChange} />
          <input type='submit' value='Create New User' />
        </form>
      </div>
    )
  }
}
