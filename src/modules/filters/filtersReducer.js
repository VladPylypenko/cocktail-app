import {handleActions} from '@letapp/redux-actions';
import {getFilters, updateFiltersSelected} from './filtersActions';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  isError: false,
  error: null,
};

export default handleActions(
  {
    [getFilters.start]: state => ({
      ...state,
      isLoading: true,
      isError: false,
      error: null,
    }),
    [getFilters.success]: (state, action) => ({
      ...state,
      items: action.payload,
      isLoading: false,
      isError: false,
      error: null,
    }),
    [getFilters.error]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      error: action.payload,
    }),
    [updateFiltersSelected]: (state, action) => ({
      ...state.items,
      items: action.payload,
    }),
  },
  INITIAL_STATE,
);
