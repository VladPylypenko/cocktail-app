import {createStore, applyMiddleware} from 'redux';
import reducer from '../modules';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({
  realtime: true,
  hostname: 'localhost',
  port: 8000,
  suppressConnectErrors: false,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
