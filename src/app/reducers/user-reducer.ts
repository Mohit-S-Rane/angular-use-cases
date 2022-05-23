import { User } from '../models/user';
import { Action } from '../actions';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_ACTION, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_UPDATE_SUCCESS, } from '../actions/user-actions';
import { createSelector } from '@ngrx/store';

export interface UserReducerState {
  loggedIn: boolean;
  loggingIn: boolean;
  user: User;
}

const initialState: UserReducerState = {
  loggedIn: false,
  loggingIn: false,
  user: null as any
};

export function UserReducer(state = initialState, action: Action): UserReducerState {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
    case LOGIN_REQUEST: {
      return {...state, loggingIn: true};
    }
    case USER_PROFILE_SUCCESS:
    case LOGIN_SUCCESS: {
      return {...state, ...{user: action.payload, loggingIn: false, loggedIn: true}};
    }
    case LOGOUT_ACTION: {
      return {...initialState};
    }
    case USER_UPDATE_SUCCESS: {
      return {...state, user: action.payload};
    }
    case USER_UPDATE_SUCCESS: {
      return {...state, user: action.payload}
    }
    default: {
      return state;
    }
  }
}
