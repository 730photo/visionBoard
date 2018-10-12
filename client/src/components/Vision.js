import React, { Component } from 'react'
// import axios from 'axios'
import Gallery from './Gallery'
import VisionBoard from './VisionBoard'
import styled from 'styled-components'



export default class Vision extends Component {
     state = {
        selectedFile: null,
        showGallery: false,
        urlArray:[]
      }

      // take whatever is in the urlArray and save it to the visionBoard
      //pass this.state.urlArray as props to visionBoard

  // fileSelectedHandler = event => {
  //   this.setState({
  //     selectedFile: event.target.files[0]
  //   })
  // }

  // fileUploadHandler = () => {
  //   const fd = new FormData()
  //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
  //   axios.post('')
  // }

  toggleView = () => {
    this.setState({ showGallery: !this.state.showGallery })
  }

  saveUrl = async (url) => {
    // const userId = this.props.match.params.userId
    const newArray = [ ...this.state.urlArray ]
    newArray.push(url)
    this.setState({ urlArray: newArray })
    // console.log(event.target.value
    // const response = await axios.post(`/api/users/${userId}/visions`)
    // newArray.push(response.data)
    // this.setState({urlArray:newArray})
  }

  // write a function that takes 1 argument which is the url. 
  // The function will add url to an array in the state of vision
  // pass array of urls from vision to visionBoard
  // define function
  

  render() {
    return (
      
      <div>
        <button onClick={this.toggleView}>TOGGLE</button>
        {this.state.showGallery ? 
          <Gallery saveUrl={this.saveUrl}/> :
          <VisionBoard urlArray={this.state.urlArray}/>
        }
      </div>
      
    )
  }
}
