import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        keyword: ''
    }

    handleChange = (event) => {
        let keyword = this.state.keyword
        keyword = event.target.value
        this.setState({ keyword })
    }

    submitHandler = () => {
        
    }

  render() {
    return (
      <div>
        <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleChange}/>
        <button onClick={this.submitHandler}>Search</button>
      </div>
    )
  }
}
