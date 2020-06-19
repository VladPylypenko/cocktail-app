import {combineReducers} from 'redux';
import filters from './filters';
import drinks from './drinks';

export default combineReducers({
  filters,
  drinks,
});
