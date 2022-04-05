import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers';

const rootReducer = combineReducers({counterReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
