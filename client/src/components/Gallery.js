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
            'https://i.imgur.com/EWOSoWK.jpg',
            'https://i.imgur.com/jUpej5J.jpg', 
            'https://i.imgur.com/Nk6kxJK.jpg',
            'https://i.imgur.com/63sI9yB.jpg',
            'https://i.imgur.com/YFSvdgl.jpg', 
            'https://i.imgur.com/CAjGSu6.jpg',
            'https://i.imgur.com/x1ecyHR.jpg',
            'https://i.imgur.com/Clem5OF.jpg'
        ]
    }

    handleClick = (e) => {
        this.props.saveUrl(e.target.value)
    }

  render() {

    return (
      <StyledGallery>
        <img src={this.state.urls[0]} alt="first"/> 
        <button value={this.state.urls[0]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[1]} alt="second"/>
        <button value={this.state.urls[1]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[2]} alt="third"/>
       <button value={this.state.urls[2]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[3]} alt="fourth"/>
        <button value={this.state.urls[3]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[4]} alt="fifth"/>
        <button value={this.state.urls[4]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[5]} alt="sixth"/>
        <button value={this.state.urls[5]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[6]} alt="seventh"/>
        <button value={this.state.urls[6]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[7]} alt="eighth"/>
        <button value={this.state.urls[7]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[8]} alt="ninth"/>
        <button value={this.state.urls[8]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[9]} alt="tenth"/>
        <button value={this.state.urls[9]} onClick={this.handleClick}>Select</button>

        <img src={this.state.urls[10]} alt="eleventh"/>
        <button value={this.state.urls[10]} onClick={this.handleClick}>Select</button>
       
        <img src={this.state.urls[11]} alt="twelth"/>
        <button value={this.state.urls[11]} onClick={this.handleClick}>Select</button>

      </StyledGallery>
    )
  }
}
