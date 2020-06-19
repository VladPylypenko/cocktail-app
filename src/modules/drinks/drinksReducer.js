import {handleActions} from '@letapp/redux-actions';
import {fetchDrinks, clearDrinks} from './drinksActions';

const INITIAL_STATE = {
  items: [],
  hasNoMore: false,
  pageIndex: 0,
  isLoading: false,
  isError: false,
  error: null,
};

export default handleActions(
  {
    [fetchDrinks.start]: state => ({
      ...state,
      isLoading: true,
      isError: false,
      error: null,
    }),
    [fetchDrinks.success]: (state, action) => ({
      ...state,
      items: action.payload,
      pageIndex: state.pageIndex + 1,
      isLoading: false,
      isError: false,
      error: null,
    }),
    [fetchDrinks.error]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      error: action.payload,
    }),
    [clearDrinks]: state => ({
      ...state,
      hasNoMore: false,
      pageIndex: 0,
      isLoading: false,
      isError: false,
      error: null,
    }),
  },
  INITIAL_STATE,
);
