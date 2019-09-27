import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-rest';

  constructor (
    private taskService: TaskService
  ) {}

  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(task => {
      console.log(task);
    });
  }

  getTask() {
    this.taskService.getTask('1')
    .subscribe(task => {
      console.log(task);
    });
  }

}
