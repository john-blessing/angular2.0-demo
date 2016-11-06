import {Component} from '@angular/core';
const detailLess = require('./detail.component.less').toString();

@Component({
    selector: 'detail-component',
    templateUrl: '../templates/detail.html',
    styleUrls: [detailLess]
})
export class DetailComponent {
    show_expression: string = 'show_first'
    first: string = 'first';
}