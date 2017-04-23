export function logOut () {
    return function (dispatch) {
        dispatch({type: "LOG_OUT"});
    }
}

