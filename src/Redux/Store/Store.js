import { createStore } from 'redux'

import {mystore } from '../Reducers/CombineReducer';

export const Store=createStore(mystore);