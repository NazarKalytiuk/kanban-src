import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Priority, Task } from '../model/task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskState } from '../model/taskState';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

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
      description: [this.task.description, Validators.required],
      priorityField: [this.task.priority, Validators.required]
    });
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
  onSubmit() {
    this.task.description = this.editForm.value.description;
    this.task.priority = this.editForm.value.priorityField;
    this.update.emit(this.task);
  }

  abort() {
    this.task.state = TaskState.aborted;
    this.update.emit(this.task);
  }
  startDoing() {
    this.task.state = TaskState.inProgress;
    this.update.emit(this.task);
  }

}
