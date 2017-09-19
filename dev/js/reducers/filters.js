import {GET_ALL_GALLERY} from "./constants";

/*
    this is to set max value on range input
*/

const initialState = {
    commentsFilter: {
        max: 100,
        min: 0
    },
    scoreFilter: {
        max: 100,
        min: 0
    }
};
export default function (state = initialState, action){
    switch(action.type) {

        case GET_ALL_GALLERY:
            // max values for range input
            const comments_max = Math.max.apply(Math, action.payload.map((o) => o.data.num_comments));
            const score_man = Math.max.apply(Math, action.payload.map((o) => o.data.score));
            return {...state,
                commentsFilter: {max: comments_max, min: 0},
                scoreFilter: {max: score_man, min: 0}
            };

        default:
            return state;
    }
}

