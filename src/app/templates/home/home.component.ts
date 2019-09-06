import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IUserInfoState } from 'src/app/state-management/state/user-info.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInfo: IUserInfoState;
  constructor(private store: Store<IUserInfoState>) {}

  ngOnInit() {
    this.store.pipe(select('userInfoState')).subscribe((userInfo: IUserInfoState) => {
      return (this.userInfo = userInfo[1]);
    });
  }
}
