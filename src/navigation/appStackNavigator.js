import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Filters from '../screens/Filters';
import Drinks from '../screens/Drinks';

const RootNavigator = createAppContainer(
  createStackNavigator({
    Drinks,
    Filters,
  }),
);

export default () => <RootNavigator />;
