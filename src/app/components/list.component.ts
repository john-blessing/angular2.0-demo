import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate,
    OnInit
} from '@angular/core';
import {GetUserInfo} from '../services/getUserInfo.service';

@Component({
    selector: 'list-component',
    templateUrl: '../templates/list.html',
    styleUrls: [],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1 })),
            transition('void => *', [
                style({ opacity: 0 }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ],
    providers: [GetUserInfo]
})
export class ListComponent implements OnInit {

    public items: any[] = [];

    constructor(private getUserInfo: GetUserInfo) {

    }

    public ngOnInit(): void {
        this.items = this.getUserInfo.getInfo();
    }

    public saveValue(event: any): void {

    }

    public toggleState(item: any): void {
        console.log(item);
    }
}