import {Component} from "@angular/core";

const todos = [
    {
        title: 'Изучить JS',
        completed: true
    },
    {
        title: 'Изучить Andgular 2',
        completed: false
    },
    {
        title: 'НАписать приложение',
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Andular 2Do';
    todos = todos;

    toggle(todo: any){
        todo.completed = !todo.completed;
    }

    delete(todo: any){
        let index = this.todos.indexOf(todo);

        if(index > -1 ) {
            this.todos.splice(index, 1);
        }
    }
}
