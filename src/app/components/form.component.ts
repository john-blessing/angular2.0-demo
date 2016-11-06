import {Component} from '@angular/core';

@Component({
    selector: 'form-component',
    templateUrl: '../templates/form.html'
})
export class FormComponent{
    email: string = '1585185302@qq.com';
    pwd: string = 'jinjifu02';
    heroForm: any;
    
    onSubmit() {

    }
}