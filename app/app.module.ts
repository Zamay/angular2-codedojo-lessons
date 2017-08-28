import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoService} from "./shared/todo.service";
import {DndModule} from "ng2-dnd";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DndModule.forRoot()
    ],
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent

    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule{

}