import update from 'immutability-helper';
import { ProductFilters } from './productDetailsReducer';
import { Reducer } from 'redux';
import UserAction, { UserReducerAction } from '../actions/userAction';

export interface User {
  filters: ProductFilters;
}

export const userInitialState = {
  filters: {
    gender: [],
    category: [],
    trends: [],
  },
};

export const userReducer: Reducer<User, UserReducerAction> = (state = userInitialState, action) => {
  switch (action.type) {
    case UserAction.UPDATE_USER_FILTERS:
      return update(state, { filters: { $set: action.filters } });
    default:
      return state;
  }
};
