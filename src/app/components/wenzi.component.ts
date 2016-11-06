import {Component} from '@angular/core'

@Component({
    selector: "wenzi",
    template: "<h2 (mouseenter)='printWenzi()'>{{message}}</h2>"
})
export class WenziComponent{
    message: string = "hello world"

    printWenzi(): void{
        console.log('hello world')
    }
}