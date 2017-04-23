import axios from 'axios'

export function loadAudioList (data) {
    return function (dispatch) {
        axios({
            method: 'get',
            url: 'https://i2x-challenge.herokuapp.com/ai/recording/list/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "JWT " + localStorage.getItem('token')
            }
        }).then((response)=>{
            dispatch({type: "LOAD_AUDIO_LIST", payload: response});
        }).catch((error) => {
            dispatch({type: "LOG_OUT", payload: error});
            console.log(error);
        });

    }
}

