import { Action } from '@ngrx/store';
import { IUserReposState } from '../state/user-repos.state';

export const UPDATE_USER_REPOS = '[User repositories] Update';

export class SearchedUserRepos implements Action {
  type = UPDATE_USER_REPOS;

  constructor(public payload: IUserReposState[]) {}
}

export type Actions = SearchedUserRepos;
