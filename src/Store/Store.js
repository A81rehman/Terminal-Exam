import {legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk}from 'redux-thunk';
import logger from 'redux-logger';
import { Reducer } from '../Reducers/Reducers';
import { Reducer1 } from '../Reducers/Reducers1';

const rootReducer = combineReducers({
    reducerA: Reducer,
    reducerB: Reducer1,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;