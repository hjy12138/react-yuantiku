import React, { Component } from 'react'
import '@/views/Practice/Practice.less'
import { SubmitApi } from '@/request/api';
import { showHideAlert1, AlertMapDispatchToProps } from '@/utils';

import { connect } from "react-redux";

class Panduan extends Component {
    state = {
        option: "",
        ifShowAnswer: false
    }
    render() {
        let timu = this.props.timu;
        let myarr = JSON.parse(timu.optionContent || '[]');
        return (
            <div className='panduan' style={{display:timu.questionType ==='check'?'block':'none'}}>
                <div className='timu_title'>
                    <span>判断</span>
                    <p>{timu.title}</p>
                </div>
                <ul className='timu_options'>
                    {
                        myarr.map((item, index) => (

                            <li
                                key={index}
                                onClick={() => this.setState({ option: item.key })}>
                                <i
                                    className={this.state.option === item.key ? 'iconfont icon-danxuanxiangxuanzhong' : 'iconfont icon-normal'}></i>
                                <span>{item.key}. {item.value}</span>
                            </li>
                        ))

                    }

                </ul>

                <p className='timu_tips'>温馨提醒：请按时作答</p>
                <div className='timu_submit'
                    onClick={this.submitFn.bind(this, timu.id, timu.categoryCode)}>确认</div>
                <section style={{ display: this.state.ifShowAnswer ? 'block' : 'none' }}>
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
    submitFn(id, categoryCode) {
        SubmitApi({
            categoryCode,
            actionType: "exam_test",
            userAnswer: this.state.option,
            actionCode: this.props.actionCode,
            id
        }).then(res => {
            if (res.errCode === 0) {
                showHideAlert1(this.props, "success", "提交成功");
                //显示答案
                this.setState({ ifShowAnswer: true })
            }

        })
    }
}
export default connect(null, AlertMapDispatchToProps)(Panduan)