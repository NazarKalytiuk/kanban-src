import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss']
})
export class TodoTasksComponent implements OnInit {
  @Input() tasks;
  @Output() updateItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  update(item) {
    console.log(item);
    this.updateItem.emit(item);
  }

}
