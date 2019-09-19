import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API (Continued)';
  tasks;
  task;

  // tslint:disable-next-line: variable-name
  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    this.getTasksFromService();
    this.getTaskFromService('5d7fde3f21d56b33b4dcdec5');
  }

  getTasksFromService() {
    const tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log('Got tasks!', data);
      this.tasks = data;
    });
  }

  getTaskFromService(id) {
    const tempObservable = this._httpService.getTaskById(id);
    tempObservable.subscribe(data => {
      this.task = data;
      console.log(id);
    });
  }

  // getTasksFromService() {
  //   const tempObservable = this._httpService.getTasks();
  //   tempObservable.subscribe(data => {
  //     console.log('All Tasks:', data);
  //     for (const task of data.tasks) {
  //       this.tasks.push(task.tasks);
  //     }
  //     this.tasks = data.tasks;
  //   });
  // }
}
