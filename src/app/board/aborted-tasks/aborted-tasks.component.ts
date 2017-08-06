import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aborted-tasks',
  templateUrl: './aborted-tasks.component.html',
  styleUrls: ['./aborted-tasks.component.scss']
})
export class AbortedTasksComponent implements OnInit {
  @Input() tasks;
  @Output() deleteItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(item) {
    this.deleteItem.emit(item);
  }
}
