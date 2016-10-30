import {Component} from '@angular/core';
import '../../public/less/styles.less';
let style = require('./app.less').toString();

@Component({
    selector: 'my-app',
    templateUrl: '../templates/app.html',
    styleUrls: [style]
})
export class AppComponent {
    public heroImageUrl: string = 'http://img03.sogoucdn.com/app/a/100520024/1bbf0255fe550d4529350d3d2cfdafec'

    public isUnchanged: boolean = true;

    classes: string = '.inner-word'
}