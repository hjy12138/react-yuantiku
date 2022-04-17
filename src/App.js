import React, { Component } from 'react'

import './App.less'
import MyAlert from './components/MyAlert/MyAlert'
export default class App extends Component {
  render() {
    return (
      
      <div>
        <MyAlert />
        {this.props.children}
      </div>
    )
  }
}
