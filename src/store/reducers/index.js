import {combineReducers} from 'redux'
import {defaultReducers} from "./tableReducers";

export const reducers = combineReducers({
    'content': defaultReducers
})