import { TaskService } from './services/task.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { MaterialModule } from '@angular/material';
import { DoingTasksComponent } from './doing-tasks/doing-tasks.component';
import { DoingTaskComponent } from './doing-task/doing-task.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { AbortedTaskComponent } from './aborted-task/aborted-task.component';
import { AbortedTasksComponent } from './aborted-tasks/aborted-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    BoardComponent,
    TodoTaskComponent,
    TodoTasksComponent,
  ],
  entryComponents: [
    AddTaskComponent
  ],
  declarations: [BoardComponent, TodoTaskComponent, TodoTasksComponent, DoingTasksComponent,
    DoingTaskComponent, DoneTasksComponent, DoneTaskComponent, AbortedTaskComponent, AbortedTasksComponent, AddTaskComponent],
  providers: [TaskService]
})
export class BoardModule { }
