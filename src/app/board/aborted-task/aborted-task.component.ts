import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Priority, Task } from '../model/task';

@Component({
  selector: 'app-aborted-task',
  templateUrl: './aborted-task.component.html',
  styleUrls: ['./aborted-task.component.scss']
})
export class AbortedTaskComponent implements OnInit {
  @Input() task: Task;
  @Output() delete = new EventEmitter();
  public priority = Priority;
  constructor() { }

  ngOnInit() {
  }
  onDelete() {
    this.delete.emit(this.task);
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
}
