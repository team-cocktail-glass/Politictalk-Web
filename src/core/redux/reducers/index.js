import { combineReducers } from 'redux';
import authReducer from './authReducer';
import locationReducer from './locationReducer';

const reducers = combineReducers({
  authReducer,
  locationReducer,
});

export default reducers;
