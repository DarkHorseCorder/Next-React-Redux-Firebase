import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ThunkMiddleware from 'redux-thunk'
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers/index';

const middlewares = [ThunkMiddleware, ReduxPromise]

export function initializeStore (initialState = {}) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

  //return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(ThunkMiddleware)))

}
