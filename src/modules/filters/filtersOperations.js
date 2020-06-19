import * as actions from './filtersActions';
import {ListFilters} from '../../api';

export const fetchFilters = () => {
  return async dispatch => {
    try {
      dispatch(actions.getFilters.start());
      let response = await ListFilters.getList();
      let result = await response.json();
      dispatch(
        actions.getFilters.success(
          result.drinks.map(obj => ({...obj, isSelected: true})),
        ),
      );
    } catch (error) {
      dispatch(actions.getFilters.error({message: error.message}));
    }
  };
};

export const updateFiltersSelected = filters => {
  return dispatch => dispatch(actions.updateFiltersSelected(filters));
};
