import {Component} from 'angular2/core';
import { MyComponent } from './my-component/my-component.component'  ;

@Component({
    moduleId: 'app/src/',
    selector: 'my-app',
    templateUrl: 'app.view.html',
    directives: [MyComponent]
})
export class AppComponent {
    private message: string;
}