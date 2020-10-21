import { createStore } from 'redux';
import boards from './reducers/boards';

const store = createStore(boards);

export default store;
