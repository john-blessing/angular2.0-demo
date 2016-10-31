import {Component} from '@angular/core';

@Component({
    selector: 'form-app',
    templateUrl: '../../templates/home.html'
})
export class HomeComponent{
    email: string = '1585185302@qq.com';
    pwd: string = 'jinjifu02';
    heroForm: any;

    onSubmit() {

    }
}