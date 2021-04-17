import { Component } from '@angular/core'
import { environment } from '../environments/environment'

// const igor = process.env.backendUrl

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-client'
  back = environment.backendUrl
}
