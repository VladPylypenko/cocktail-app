import * as actions from './drinksActions';
import {Drinks} from '../../api';

export const fetchDrinks = category => {
  return async dispatch => {
    try {
      dispatch(actions.fetchDrinks.start());

      const response = await Drinks.getCurrentDrinks(category);
      const result = await response.json();

      dispatch(actions.fetchDrinks.success({category, drinks: result.drinks}));
    } catch (error) {
      dispatch(actions.fetchDrinks.error({message: error.message}));
    }
  };
};

export const clearDrinks = () => {
  return dispatch => dispatch(actions.clearDrinks());
};
