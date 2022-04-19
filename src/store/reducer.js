const defaultState = {
    // 弹框提示
    showAlert: false,
    // 弹框类型
    alertType: "success",
    // 弹框内容
    alertContent: "asdasd"
}

// eslint-disable-next-line
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "showAlert":
            newState.showAlert = action.value.showAlert;
            newState.alertType = action.value.alertType;
            newState.alertContent = action.value.alertContent;
            break;
        case "hideAlert":
            newState.showAlert = false;
            break;
        default:
            break;
    }   
    return newState;
}
