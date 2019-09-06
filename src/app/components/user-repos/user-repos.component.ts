import { Component, OnInit } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IUserReposState } from 'src/app/state-management/state/user-repos.state';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {
  userRepos: Observable<IUserReposState[]>;
  constructor(private store: State<IUserReposState[]>) {}

  ngOnInit() {
    this.store.pipe(select('userReposState')).subscribe((response: Observable<IUserReposState[]>) => {
      if (response[1]) {
        response[1] = this.orderByStargazers(response[1], 'stargazers_count');
      }

      this.userRepos = response[1];
    });
  }

  orderByStargazers(object: any, value: String) {
    return object
      .sort((a, b) => (a[`${value}`] > b[`${value}`] ? 1 : b[`${value}`] > a[`${value}`] ? -1 : 0))
      .reverse();
  }
}
