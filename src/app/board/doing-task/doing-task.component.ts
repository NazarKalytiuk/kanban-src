import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Priority, Task } from '../model/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskState } from '../model/taskState';

@Component({
  selector: 'app-doing-task',
  templateUrl: './doing-task.component.html',
  styleUrls: ['./doing-task.component.scss']
})
export class DoingTaskComponent implements OnInit {
  @Input() task: Task;
  @Output() update = new EventEmitter();
  constructor(private fb: FormBuilder) { }
  public priority = Priority;
  public editForm: FormGroup;
  public priorityKeys: Array<string>;
  ngOnInit() {
    this.priorityKeys = Object.keys(this.priority);
    this.priorityKeys = this.priorityKeys.slice(this.priorityKeys.length / 2);
    this.editForm = this.fb.group({
      priorityField: [this.task.priority, Validators.required]
    });
  }
  onSubmit() {
    this.task.priority = this.editForm.value.priorityField;
    this.update.emit(this.task);
  }
  abort() {
    this.task.state = TaskState.aborted;
    this.update.emit(this.task);
  }
  done() {
    this.task.state = TaskState.done;
    this.update.emit(this.task);
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
