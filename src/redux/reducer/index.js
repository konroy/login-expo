import {combineReducers} from 'redux';
import auth from './auth';

//combine reducers
const rootReducer = combineReducers({
    auth
});

export default rootReducer;