import {createStore} from 'redux';
import rootReducer from './reducer';

//create Redux store
let store = createStore(rootReducer);

export default store;