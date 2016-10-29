import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {GetUserInfo} from '../services/getUserInfo.service';
import {AppComponent} from '../components/app.component';
import {HomeComponent} from '../components/home.component';
import {ListComponent} from '../components/list.component';
import {DetailComponent} from '../components/detail.component';

@NgModule({
    imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'list',
        component: ListComponent
    }, {
        path: 'detail',
        component: DetailComponent
    }])],
    declarations: [AppComponent, ListComponent, HomeComponent, DetailComponent],
    providers: [GetUserInfo],
    bootstrap: [AppComponent]
})
export class AppModule{}

