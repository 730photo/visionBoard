import React, { Component } from 'react'
import axios from 'axios'

export default class Vision extends Component {
     state = {
        user: {},
        visions: []
      }

      getUser = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.get(`/api/users/${userId}`)
        this.setState({
          user: response.data,
          visions: response.data.visions.reverse()
        })
      }

      componentDidMount = () => {
        this.getUser()
      }

// handles the new vision function
  handleNew = async () => {
    const userId = this.props.match.params.userId
    await axios.post(`/api/users/${userId}/visions`)
    await this.getUser()
  }

  // handles the delete function
  handleDelete = async (visionId) => {
    const userId = this.props.match.params.userId
    await axios.delete(`/api/users/${userId}/ideas/${visionId}`)
    await this.getUser()
  }

// handles the function when you want to change an idea
handleChange = (event, i) => {
    //take it out
    const visions = [...this.state.ideas]
    //change it
    visions[i][event.target.name] = event.target.value
    //put it back
    this.setState({ visions })
  }

  // handles the updated idea function within the api
  updateVision = async (i) => {
    console.log('updating')
    const userId = this.props.match.params.userId
    const updatedVision = this.state.ideas[i]
    await axios.put(`/api/users/${userId}/ideas/${updatedVision._id}`, updatedVision)
  }

  render() {
    return (
      <div>
        Vision
      </div>
    )
  }
}
