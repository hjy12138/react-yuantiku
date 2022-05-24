import React, { Component } from 'react'
import '@/views/Practice/Practice.less'
export default class Wenda extends Component {
  render() {
    return (
      <div className='wenda'>
          <div className='timu_title'>
            <span>问答</span>
            <p>唐烨男说 别看我小 别 看我小 小的让你找不着</p>
          </div>
          <textarea className='timu_textarea'></textarea>
          <p className='timu_tips'>温馨提醒：请按时作答</p>
          <div className='timu_submit'>确认</div>
          <div className='timu_answer'>
            <span>答案：</span>
            <p></p>
          </div>
      </div>
    )
  }
}
