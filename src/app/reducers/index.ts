import * as fromUser from './user-reducer';
import {ActionReducerMap} from '@ngrx/store/src/models';
import {createSelector} from '@ngrx/store';

export interface RootReducerState {
  user: fromUser.UserReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  user: fromUser.UserReducer
};

const getUserRootState = (state: RootReducerState) => state.user;
export const userLoggedIn = createSelector(getUserRootState, fromUser.loggedIn);
export const userLoggingIn = createSelector(getUserRootState, fromUser.loggingIn);
export const getUser = createSelector(getUserRootState, fromUser.user);
