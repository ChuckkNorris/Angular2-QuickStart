import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
    moduleId: 'app/src/my-component/',
    selector: 'my-component',
    templateUrl: 'my-component.view.html',
    styleUrls: ['my-component.style.css'],
    inputs: ['myInput']
})
export class MyComponent {
    public myInput: string;
    
    @Output() everySecond = new EventEmitter();
    
    /**
     *
     */
    constructor() {
        setInterval(() => this.everySecond.emit('event'), 1000);
    }
}