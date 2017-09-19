import { GET_ALL_GALLERY } from '../reducers/constants';
import { HIDE_GALLERY_PRELOADER } from '../reducers/constants';

import axios from 'axios';

export function getGallery () {
    return function (dispatch) {
        axios({
            method: 'get',
            url: 'https://www.reddit.com/r/aww.json',
            headers: { 'Content-Type': 'application/json' }
        }).then((response)=>{
            if (response) {
                // simulate loading a bit longer to see pre loader
                setTimeout(() => {
                    dispatch({type: GET_ALL_GALLERY, payload: response.data.data.children});
                    dispatch({type: HIDE_GALLERY_PRELOADER});
                }, 1000)
            }
        }).catch((error) => {
            console.log(error);
        });

    }
}

