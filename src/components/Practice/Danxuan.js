import React, { Component } from 'react'
import '@/views/Practice/Practice.less'
export default class Danxuan extends Component {
    state={
        option: -1
    }
    render() {
    let timu=this.props.timu;
    let myarr=JSON.parse(timu.optionContent);
    return (
        <div className='wenda'>
        <div className='timu_title'>
          <span>单选</span>
          <p>{timu.title}</p>
        </div>
        <ul className='timu_options'>
            {
                myarr.map((item,index)=>(
                
                    <li 
                        key={index}
                        onClick={()=>this.setState({option:index})}>
                        <i 
                        className={this.state.option===index ?'iconfont icon-danxuanxiangxuanzhong' :'iconfont icon-normal'}></i>
                        <span>{item.key}. {item.value}</span>
                    </li>
                ))
                
            }
            
        </ul>
     
        <p className='timu_tips'>温馨提醒：请按时作答</p>
        <div className='timu_submit'>确认</div>
        <section style={{display:'none'}}>
            <div className='timu_answer'>
            <span>答案：</span>
            <p>{timu.answer}</p>
            </div>
            <div className='timu_answer timu_analysis'>
            <span>解析：</span>
            <p>{timu.analysis}</p>
            </div>
        </section>
    </div>
    )
  }
}
