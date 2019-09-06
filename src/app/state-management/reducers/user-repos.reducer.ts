import * as UserReposActions from '../actions/user-repos.actions';
import { IUserReposState } from '../state/user-repos.state';

const initialState: IUserReposState[] = {} as IUserReposState[];

export function userReposReducer(state: IUserReposState[] = initialState, action: UserReposActions.SearchedUserRepos) {
  switch (action.type) {
    case UserReposActions.UPDATE_USER_REPOS:
      return [state, action.payload];
    default:
      return state;
  }
}
