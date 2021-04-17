import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { OrganizerAppComponent } from './components/organizer-app/organizer-app.component'
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component'
import { HttpClientModule } from '@angular/common/http'
import {TodoService} from './services/todo.service'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrganizerAppComponent,
    AddTodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
