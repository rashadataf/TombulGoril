import {createStore} from 'redux';
import urlReducer from './reducers/urlReducer';

const store = createStore(urlReducer);

export default store;