import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  account: accountReducer,
});
export default rootReducer;
