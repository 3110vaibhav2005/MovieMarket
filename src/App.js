import React, { Component } from 'react'
import MyCompo from './components/MyCompo';
import Navbar from './components/Navbar'

export class App extends Component {
  render() {
    return (
      <div className="p-3 mb-2 bg-info text-white border border-dark">
        <Navbar/>
        <MyCompo/>
      </div>
    )
  }
}

export default App;
