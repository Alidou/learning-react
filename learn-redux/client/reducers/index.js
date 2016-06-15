import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const state = {
    posts,
    comments,
    routing: routerReducer
};

const rootReducer = combineReducers(state);

export default rootReducer;