import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import {filtersOperations} from './src/modules/filters';
import Filters from './src/screens/Filters';
import Navigator from './src/navigation/appStackNavigator';

const App = () => {
  useEffect(() => {
    store.dispatch(filtersOperations.fetchFilters());
  }, []);
  return <Navigator />;
};

const connectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default connectedApp;
