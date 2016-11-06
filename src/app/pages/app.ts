import {Component} from '@angular/core';
import '../../public/less/styles.less';
let style = require('./app.less').toString();

@Component({
    selector: 'my-app',
    templateUrl: '../templates/app.html',
    styleUrls: [style]
})
export class AppComponent { 
    heroImageUrl: string = 'http://img03.sogoucdn.com/app/a/100520024/1bbf0255fe550d4529350d3d2cfdafec'
    isUnchanged: boolean = true;
    active: boolean = true;
    objcontrol: Object = {"display": "true"};
    email: string = '1585185302@qq.com';
    pwd: string = 'jinjifu02';
    heroForm: any;
    classes: string = '.inner-word';

    onSubmit(): void{
        console.log('data has been submited!')
    }
    needLogin(): void{
        
    }
}