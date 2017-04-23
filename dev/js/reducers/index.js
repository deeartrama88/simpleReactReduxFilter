import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import audioList from './audioList'

const allReducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    auth: auth,
    audioList: audioList
});

export default allReducers;