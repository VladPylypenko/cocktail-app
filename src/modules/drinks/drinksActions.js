import {createAsyncActions, createAction} from '@letapp/redux-actions';

export const fetchDrinks = createAsyncActions('drinks/FETCH_DRINKS');

export const clearDrinks = createAction('drinks/CLEAR_DRINKS');
