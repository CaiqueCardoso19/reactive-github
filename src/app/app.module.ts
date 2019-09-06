import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';

import { SearchService } from './components/search/search.service';

import { userReposReducer } from './state-management/reducers/user-repos.reducer';
import { userInfoReducer } from './state-management/reducers/user-info.reducer';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent, UserInfoComponent, UserReposComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ userInfoState: userInfoReducer, userReposState: userReposReducer })
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
