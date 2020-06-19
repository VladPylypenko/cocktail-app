import {createAsyncActions, createAction} from '@letapp/redux-actions';

export const getFilters = createAsyncActions('filters/FETCH_FILTERS');

export const updateFiltersSelected = createAction(
  'filters/UPDATE_FILTERS_SELECTED',
);
