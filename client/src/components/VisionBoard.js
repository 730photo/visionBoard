import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const StyledVisionBoard = styled.div`
    h1 {
        text-align: center;
    }

    img {
        width: 200px;
        height: 150px;
        float: left;
        margin-left: 20px;
        margin-right: auto;
    }
`
export default class VisionBoard extends Component {
   
    state = {
        
    }

    saveToDataBase = async () => {
        await axios.post(`/api/users/${this.params.userId}/visions`)
    }

    // settingState = {}
//map return every index value in an array
  render() {
    const urlImages = this.props.urlArray.map((image)=> {
          return(
              <div>
                  <img src={image} alt="blah"/>
                </div>
              
          )
      })
    return (
      //every time you click the select button, an image will be stored on the vision board
        <div>
            <h1>Vision Board</h1>
            <StyledVisionBoard>
            {urlImages}
            </StyledVisionBoard>
            </div>
      
    )
  }
}
