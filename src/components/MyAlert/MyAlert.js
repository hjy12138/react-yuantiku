import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';
import './MyAlert.less'
import {connect} from 'react-redux'  //引入连接器

class MyAlert extends Component {
    render() {
        return (
            <Alert style={{display: this.props.showAlert ? 'flex' : 'none'}} variant="filled" severity={this.props.alertType} >{this.props.alertContent}</Alert>
        );
    }
}

// stateToProps是一种映射关系，把原来的state映射成组件中的props属性
const mapStateToProps = (state)=>{
    return {
        showAlert : state.showAlert,
        alertType : state.alertType,
        alertContent : state.alertContent
    }
}

export default connect(mapStateToProps,null)(MyAlert);
