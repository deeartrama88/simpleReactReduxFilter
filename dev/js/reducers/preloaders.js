import { HIDE_GALLERY_PRELOADER } from './constants';
import { SHOW_GALLERY_PRELOADER } from './constants';

const initialState = {
    galleryPreloader: true
};
export default function (state = initialState, action){
    switch(action.type) {

        case HIDE_GALLERY_PRELOADER:
            return {...state, galleryPreloader: false};

        case SHOW_GALLERY_PRELOADER:
            return {...state, galleryPreloader: true};

        default:
            return state;
    }
}

