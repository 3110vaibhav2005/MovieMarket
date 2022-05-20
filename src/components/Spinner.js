import React, { Component } from 'react'
import Equalizer from './Equalizer.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
          <img src={Equalizer} alt="loading" />  
      </div>
    )
  }
}

export default Spinner
