export default function (state = [], action){
    switch(action.type) {
        case "LOAD_AUDIO_LIST":
            let newState = Object.assign({}, state);
            newState = action.payload.data.results;
            return newState;

        case "FAIL_LOAD_AUDIO_LIST":
            return [];

        default:
            return state;
    }
}

