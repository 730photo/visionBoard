import React, { Component } from 'react'
import styled from 'styled-components'

const StyledGallery = styled.div`
    img {
        width: 200px;
        height: 150px;
        display: inline-block;
        margin-left: 20px;
        margin-right: auto;
    }

    
`

export default class Gallery extends Component {
    state = {
        urls: [
            'https://i.imgur.com/12vDXkM.jpg',
            'https://i.imgur.com/QdF9klJ.jpg',
            'https://i.imgur.com/0HSrtWc.jpg',
            'https://i.imgur.com/DB8g2nV.jpg',
            'https://i.imgur.com/EWOSoWK.jpg'
        ]
    }
  render() {

    return (
      <StyledGallery>
        <img src={this.state.urls[0]} alt="first"/> 
        <button>Select</button>
        <img src={this.state.urls[1]} alt="second"/>
        <button>Select</button>
        <img src={this.state.urls[2]} alt="third"/>
        <button>Select</button> 
        <img src={this.state.urls[3]} alt="fourth"/>
        <button>Select</button> 
        <img src={this.state.urls[4]} alt="fifth"/>
        <button>Select</button>

      </StyledGallery>
    )
  }
}
