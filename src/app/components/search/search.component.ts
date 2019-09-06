import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, retryWhen, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { SearchService } from './search.service';

import { Store } from '@ngrx/store';

import { IUserInfoState } from 'src/app/state-management/state/user-info.state';
import { IUserReposState } from 'src/app/state-management/state/user-repos.state';
import { SearchedUser } from 'src/app/state-management/actions/user-info.actions';
import { SearchedUserRepos } from 'src/app/state-management/actions/user-repos.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm = new FormControl();
  hasError: boolean;
  errorMessage: string;
  user: IUserInfoState;

  constructor(
    private searchService: SearchService,
    private userStore: Store<IUserInfoState>,
    private reposStore: Store<IUserReposState[]>
  ) {}

  ngOnInit() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(_ => this.searchUser(this.searchForm.value)),
        catchError(error => this.setErrorMessage(error)),
        retryWhen(error => error)
      )
      .subscribe((response: IUserInfoState) => {
        this.hasError = false;
        this.userStore.dispatch(new SearchedUser(response));
      });

    this.searchForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(_ => this.searchRepos(this.searchForm.value)),
        catchError(error => this.setErrorMessage(error)),
        retryWhen(error => error)
      )
      .subscribe((response: IUserReposState[]) => {
        this.hasError = false;
        this.reposStore.dispatch(new SearchedUserRepos(response));
      });
  }

  searchUser(user: string): Observable<IUserInfoState> {
    return this.searchService.getUsers(user);
  }

  searchRepos(user: string): Observable<IUserReposState[]> {
    return this.searchService.getRepos(user);
  }

  setErrorMessage(error: any): Observable<never> {
    if (error.status === 404) {
      this.errorMessage = `Desculpe, usuário ${this.searchForm.value} não existe`;
    } else if (error.status === 0) {
      this.errorMessage = 'Favor verificar sua conexão';
    } else {
      'Algo de errado aconteceu';
    }

    this.hasError = true;
    return throwError(error);
  }
}
