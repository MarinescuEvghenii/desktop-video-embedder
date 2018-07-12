import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {video} from './video/reducers';
import videoMiddlewares from './video/middlewares';

const reducers = {
    video
}

const middlewares = [
    videoMiddlewares
];

const store = createStore(combineReducers(reducers), composeWithDevTools(...middlewares));

export default store;
