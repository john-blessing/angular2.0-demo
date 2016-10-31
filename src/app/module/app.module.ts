import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { GetUserInfo } from '../services/getUserInfo.service';
import { AppComponent, ListComponent, HomeComponent, DetailComponent } from '../confirm/page-collector.confirm';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule],
    declarations: [AppComponent, ListComponent, HomeComponent, DetailComponent],
    providers: [GetUserInfo],
    bootstrap: [AppComponent]
})
export class AppModule { }

