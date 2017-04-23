let initialState = {
    logged: false,
    token: false,
    error: false
};

if(localStorage.getItem('token') !== null){
    initialState.logged = true;
    initialState.token = localStorage.getItem('token');
}

export default function (state = initialState, action){
    switch(action.type) {
        case "LOGIN":
            localStorage.setItem('token', action.payload.data.token);
            let newState = Object.assign({}, state);
            newState.logged = true;
            newState.token = action.payload.data.token;
            newState.error = false;
            return newState;

        case "LOGIN_FAIL":
            let newState2 = Object.assign({}, state);
            newState2.logged = false;
            newState2.token = false;
            newState2.error = action.payload;
            return newState2;

        case "LOG_OUT":
            localStorage.removeItem('token');
            return {
                logged: false,
                token: false,
                error: false
            }

        default:
            return state;
    }
}
