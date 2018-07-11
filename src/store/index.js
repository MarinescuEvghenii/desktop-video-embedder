import {createStore, combineReducers, applyMiddleware} from 'redux';
import {video} from './video/reducers';
import {parseVideoURL} from './video/middlewares';

const logger = store => next => action => {
  console.log('Dispatching: ', action)
  let result = next(action)
  console.log('Next state: ', store.getState())
  return result
}

const reducers = combineReducers({
    video
})

const store = createStore(reducers, applyMiddleware(parseVideoURL, logger));

export default store;
