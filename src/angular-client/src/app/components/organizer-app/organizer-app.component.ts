import { Component, OnInit } from '@angular/core'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-organizer-app',
  templateUrl: './organizer-app.component.html',
  styleUrls: ['./organizer-app.component.scss']
})
export class OrganizerAppComponent implements OnInit {


  constructor(public readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
  }

}
