import { ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Task, Priority } from '../model/task';
import { TaskState } from '../model/taskState';

@Injectable()
export class TaskService {
  private subject = new ReplaySubject<Task[]>();
  public tasks: Task[] = [];
  private initMock() {
    let t = new Task();
    t.state = TaskState.doIt;
    t.name = 'Name';
    t.creationTime = new Date();
    t.description = 'askljfnlfkjgnsdlfkgjndflk sldfjgndlkgjnl dlkjgnljhn';
    t.priority = Priority.high;
    this.tasks.push(t);

    t = new Task();
    t.state = TaskState.doIt;
    t.name = 'Name11';
    t.creationTime = new Date();
    t.description = 'askljfnlfkjgnsdlfkgjndflk sldfjgndlkgjnl dlkjgnljhn';
    t.priority = Priority.high;
    this.tasks.push(t);

    let tt = new Task();
    tt.state = TaskState.inProgress;
    tt.name = 'Name2';
    tt.creationTime = new Date();
    tt.description = 'askljfnlfkjgnsdlfkgjndflk sldfjgndlkgjnl dlkjgnljhn';
    tt.priority = Priority.low;
    this.tasks.push(tt);

    tt = new Task();
    tt.state = TaskState.done;
    tt.name = 'Name3';
    tt.creationTime = new Date();
    tt.description = 'askljfnlfkjgnsdlfkgjndflk sldfjgndlkgjnl dlkjgnljhn';
    tt.priority = Priority.low;
    this.tasks.push(tt);

    tt = new Task();
    tt.state = TaskState.aborted;
    tt.name = 'Name4';
    tt.creationTime = new Date();
    tt.description = 'askljfnlfkjgnsdlfkgjndflk sldfjgndlkgjnl dlkjgnljhn';
    tt.priority = Priority.low;
    this.tasks.push(tt);

    this.subject.next(this.tasks);
  }
  private load() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    this.tasks = this.tasks || [];
    this.tasks.sort(this.compare);
    this.subject.next(this.tasks);
  }
  private save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  constructor() {
    // this.initMock();
    // this.save();
    this.load();
  }
  private compare(a: Task, b: Task) {
    if (a.priority < b.priority) {
      return 1;
    } else if (a.priority > b.priority) {
      return -1;
    } else {
      if (a.creationTime < b.creationTime) {
        return -1;
      } else if (a.creationTime > b.creationTime) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  public add(task: Task) {
    this.tasks.push(task);
    this.tasks.sort(this.compare);
    this.save();
    this.subject.next(this.tasks);
  }
  public getTasks() {
    return this.subject.asObservable();
  }
  public update(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks[index] = task;
    this.tasks.sort(this.compare);
    this.save();
    this.subject.next(this.tasks);
  }
  public remove(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.tasks.sort(this.compare);
    this.save();
    this.subject.next(this.tasks);
  }
}
