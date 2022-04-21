import React, { Component } from 'react'
import AndroidOutlinedIcon from "@material-ui/icons/AndroidOutlined";
import './Practice.less'
import Goback from '@/components/Goback/Goback';
import Wenda from '@/components/Practice/Wenda';
export default class Practice extends Component {
  render() {
    return (
      <div className='Pratice'>
        <div className='top'>
            <AndroidOutlinedIcon />
            <Wenda />
            <Goback />
        </div>
      </div>
    ) 
  }
}
