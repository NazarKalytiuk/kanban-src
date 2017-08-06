import { Task } from '../model/task';
import { TaskService } from '../services/task.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskState } from '../model/taskState';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public todoTasks: Task[] = [];
  public doingTasks: Task[] = [];
  public doneTasks: Task[] = [];
  public abortedTasks: Task[] = [];
  constructor(private tasksService: TaskService, public dialog: MdDialog) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(data => {
      console.log(data);
      this.todoTasks = data.filter(c => c.state === TaskState.doIt);
      this.doingTasks = data.filter(c => c.state === TaskState.inProgress);
      this.doneTasks = data.filter(c => c.state === TaskState.done);
      this.abortedTasks = data.filter(c => c.state === TaskState.aborted);
    });
  }

  updateItem(item) {
    console.log(item);
    this.tasksService.update(item);
  }

  deleteItem(item) {
    console.log(item);
    this.tasksService.remove(item);
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent, { width: '600px' });
    dialogRef.afterClosed().subscribe(data => {
      const t = new Task();
      t.creationTime = new Date();
      t.name = data.name;
      t.description = data.description;
      t.priority = data.priorityField;
      this.tasksService.add(t);
    });
  }
}
