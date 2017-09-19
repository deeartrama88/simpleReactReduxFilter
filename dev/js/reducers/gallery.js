import { GET_ALL_GALLERY } from './constants';
import { FILTER_GALLERY_BY_COMMENTS } from './constants';
import { FILTER_GALLERY_BY_SCORE } from './constants';

const initialState = {
    allGallery: [],
    filtered: [],
    filterValues: {
        score: 0,
        num_comments: 0
    }
};

const filterFunc = (array, filters) => {
    // go through array via filter
    return array.filter(item => {
        let valid = true;
        // here go through all filter values
        for (let key in filters) {
            if (filters.hasOwnProperty(key)){
                // if some of value is not fit - switch checkpoint to false, so it's not gonna be in array
                if (item.data[key] < filters[key]) valid = false;
            }
        }
        if (valid) return item;
    })
};

export default function (state = initialState, action){
    switch(action.type) {
        case GET_ALL_GALLERY:
            let sortedArray = action.payload;
            // here sort array when we got it first time, and it will be sorted this way
            // even after filtering
            sortedArray.sort((a, b) => a.data.num_comments - b.data.num_comments);
            return {allGallery: sortedArray, filtered: sortedArray};

        case FILTER_GALLERY_BY_COMMENTS:
            // create clean object
            let final_array_comments = {...state };
            // update filter value
            final_array_comments.filterValues = {...final_array_comments.filterValues, num_comments: action.payload};
            // filter array with new values
            final_array_comments.filtered = filterFunc(final_array_comments.allGallery, final_array_comments.filterValues);
            return final_array_comments;

        case FILTER_GALLERY_BY_SCORE:
            // create clean object
            let final_array_score = {...state};
            // update filter value
            final_array_score.filterValues = {...final_array_score.filterValues, score: action.payload};
            // filter array with new values
            final_array_score.filtered = filterFunc(final_array_score.allGallery, final_array_score.filterValues);
            return final_array_score;

        default:
            return state;
    }
}

