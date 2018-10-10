// THE HOME PAGE
// Importing react
// importing the Link tag

import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME!</h1>
        <Link to='/login'>Log In</Link>
      </div>
    )
  }
}