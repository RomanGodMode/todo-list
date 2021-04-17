import { Component, OnInit } from '@angular/core'
import { TodoService } from '../../services/todo.service'
import { FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss'],
})
export class AddTodoFormComponent implements OnInit {

  constructor(private readonly todoService: TodoService, private readonly fb: FormBuilder) {
  }

  newTodoTitleInput!: FormControl

  submitNewTodo() {
    this.todoService.addTodo(this.newTodoTitleInput.value)
  }

  ngOnInit(): void {
    this.newTodoTitleInput = this.fb.control('', Validators.required)
  }

}
