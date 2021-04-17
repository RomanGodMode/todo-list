import { Component, Input, OnInit } from '@angular/core'
import { Todo } from '../../shared/types/todo'
import { TodoService } from '../../services/todo.service'
import { FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo

  public isEdit = false
  public updateTodoTitleInput!: FormControl

  toggleIsEdit() {
    this.isEdit = !this.isEdit
  }

  submitAndStopEdit() {
    this.todoService.setTodoTitle(this.todo.id, this.updateTodoTitleInput.value)
    this.toggleIsEdit()
  }

  constructor(public readonly todoService: TodoService, private readonly fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.updateTodoTitleInput = this.fb.control(this.todo.title, Validators.required)
  }

}
