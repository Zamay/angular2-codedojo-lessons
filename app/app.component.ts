import {Component} from "@angular/core";

const todos = [
    'Изучить JS',
    'Изучить Angular 2',
    'Нарисать приложение'
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Andular 2Do';
    todos = todos
}
