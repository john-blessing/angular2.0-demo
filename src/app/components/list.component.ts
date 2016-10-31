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

class Item {
    constructor(public name: string,
        public state = 'inactive') {
    }

    public toggleState() {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
}

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
    ]
})
export class ListComponent implements OnInit {

    public items: Item[] = [];

    constructor() {
        this.items.push(new Item('Iron Man'))
    }

    ngOnInit() {

    }

    public saveValue(event: any): void {
        this.items.push(new Item(event.target.value))
    }

    public toggleState(item: any): void {
        console.log(item);
    }
}