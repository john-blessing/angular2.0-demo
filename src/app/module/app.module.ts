import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {GetUserInfo} from '../services/getUserInfo.service';
import {AppComponent,ListComponent, HomeComponent, DetailComponent} from '../confirm/page-collector.confirm';

@NgModule({
    imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
        path: '',
        component: HomeComponent
    }, {
        path: 'detail',
        component: DetailComponent
    }])],
    declarations: [AppComponent,ListComponent, HomeComponent, DetailComponent],
    providers: [GetUserInfo],
    exports: [AppComponent,ListComponent, HomeComponent, DetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}

