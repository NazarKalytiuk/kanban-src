import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Priority } from '../model/task';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public addForm: FormGroup;
  public priority = Priority;
  public priorityKeys: Array<string>;
  constructor(private fb: FormBuilder, public dialogRef: MdDialogRef<AddTaskComponent>) { }

  ngOnInit() {
    this.priorityKeys = Object.keys(this.priority);
    this.priorityKeys = this.priorityKeys.slice(this.priorityKeys.length / 2);
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      priorityField: [Validators.required]
    });
  }

  onSubmit() {
    this.dialogRef.close(this.addForm.value);
  }
}
