import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import gallery from './gallery';
import preloaders from './preloaders';
import filters from './filters';

const allReducers = combineReducers({
    routing: routerReducer,
    gallery,
    preloaders,
    filters
});

export default allReducers;