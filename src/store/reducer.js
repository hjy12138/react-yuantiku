const defaultState = {
    // 弹框提示
    showAlert: true,
    // 弹框类型
    alertType: "success",
    // 弹框内容
    alertContent: "asdasd"
}

// eslint-disable-next-line
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        
        default:
            break;
    }
    return newState;
}
