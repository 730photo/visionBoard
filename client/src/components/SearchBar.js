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

  render() {
    return (
      <div>
        <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleChange}/>
        <button>Search</button>
      </div>
    )
  }
}
