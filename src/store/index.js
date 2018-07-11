import {createStore, combineReducers, applyMiddleware} from 'redux';
import {video} from './video/reducers';
import {parseVideoURL} from './video/middlewares';

const reducers = combineReducers({
  video
})

const middlewares = applyMiddleware(
  parseVideoURL
);

const store = createStore(reducers, middlewares);

export default store;
