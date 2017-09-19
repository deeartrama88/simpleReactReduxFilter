import { FILTER_GALLERY_BY_SCORE } from '../reducers/constants';

export function filterByScore (data) {
    return {
        type: FILTER_GALLERY_BY_SCORE,
        payload: data
    }
}