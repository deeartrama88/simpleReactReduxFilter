import { FILTER_GALLERY_BY_COMMENTS } from '../reducers/constants';

export function filterByComments (data) {
    return {
        type: FILTER_GALLERY_BY_COMMENTS,
        payload: data
    };
}