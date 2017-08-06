import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doing-tasks',
  templateUrl: './doing-tasks.component.html',
  styleUrls: ['./doing-tasks.component.scss']
})
export class DoingTasksComponent implements OnInit {
  @Input() tasks;
  @Output() updateItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  update(item) {
    this.updateItem.emit(item);
  }
}
