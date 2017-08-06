import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, Priority } from '../model/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.scss']
})
export class DoneTaskComponent implements OnInit {
  @Input() task: Task;
  @Output() delete = new EventEmitter();
  public priority = Priority;
  constructor() { }

  ngOnInit() {
  }
  getPriorityClass() {
    if (this.task.priority === 0) {
      return 'low';
    } else if (this.task.priority === 1) {
      return 'normal';
    } else if (this.task.priority === 2) {
      return 'high';
    }
  }
  onDelete() {
    this.delete.emit(this.task);
  }
}
