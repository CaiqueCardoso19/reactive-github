import { Action } from '@ngrx/store';
import { IUserInfo } from 'src/app/interfaces/user-info.interface';

export const UPDATE_SEARCHED_USER = '[User Info] Update';

export class SearchedUser implements Action {
  type = UPDATE_SEARCHED_USER;

  constructor(public payload: IUserInfo) {}
}

export type Actions = SearchedUser;
