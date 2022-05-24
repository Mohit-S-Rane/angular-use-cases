import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromUser from './user-reducer';
import { state } from '@angular/animations';

export interface RootReducerState {
  user: fromUser.UserReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  user: fromUser.UserReducer,
};

const getUserRootState = (state: RootReducerState) => state.user;

export const userLoggedIn = createSelector(getUserRootState, fromUser.loggedIn);
export const userLoggingIn = createSelector(getUserRootState, fromUser.loggingIn);
export const getUser = createSelector(getUserRootState, fromUser.user);
