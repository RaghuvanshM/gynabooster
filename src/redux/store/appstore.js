import { createStore, combineReducers,applyMiddleware } from 'redux';
import reducer from '../reducer/appreducer';
import thunk from "redux-thunk" 
const configureStore = () => {
return createStore(reducer,applyMiddleware(thunk));
}
export default configureStore;