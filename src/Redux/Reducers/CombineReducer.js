import { combineReducers } from 'redux';
import { Cities, Foods } from './Reducers';

export const mystore=combineReducers({
    c1:Cities,
    f1:Foods
})