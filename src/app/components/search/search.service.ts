import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/api';
import { IUserInfoState } from 'src/app/state-management/state/user-info.state';
import { IUserReposState } from 'src/app/state-management/state/user-repos.state';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  getUsers(user: string): Observable<IUserInfoState> {
    return this._http.get(`${apiUrl}/users/${user}`) as Observable<IUserInfoState>;
  }

  getRepos(user: string): Observable<IUserReposState[]> {
    return this._http.get(`${apiUrl}/users/${user}/repos`) as Observable<IUserReposState[]>;
  }
}
