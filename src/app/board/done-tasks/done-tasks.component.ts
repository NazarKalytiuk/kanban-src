import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss']
})
export class DoneTasksComponent implements OnInit {
  @Input() tasks;
  @Output() deleteItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(item) {
    this.deleteItem.emit(item);
  }
}
