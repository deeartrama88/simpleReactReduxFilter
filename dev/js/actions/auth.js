import axios from 'axios'

export function auth (data) {
    return function (dispatch) {
        axios({
            method: 'post',
            url: 'https://i2x-challenge.herokuapp.com/core/login/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }).then((response)=>{
            localStorage.setItem('token', response.data);
            dispatch({type: "LOGIN", payload: response});
        }).catch((error) => {
            let errorObj = error.response.data;
            let errorText = errorObj[Object.keys(errorObj)[0]];
            dispatch({ type: "LOGIN_FAIL", payload: errorText[0] });
        })

    }
}

