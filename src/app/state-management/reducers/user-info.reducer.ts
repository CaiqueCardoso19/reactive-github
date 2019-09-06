import * as UserInfoActions from '../actions/user-info.actions';
import { IUserInfoState } from '../state/user-info.state';

const initialState: IUserInfoState = {} as IUserInfoState;

export function userInfoReducer(state: IUserInfoState = initialState, action: UserInfoActions.SearchedUser) {
  switch (action.type) {
    case UserInfoActions.UPDATE_SEARCHED_USER:
      return [state, action.payload];
    default:
      return state;
  }
}
