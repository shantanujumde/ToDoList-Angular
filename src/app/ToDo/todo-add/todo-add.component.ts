import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/Models/ToDoModel';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  constructor() {}
  title: string;
  desc: string;
  ngOnInit(): void {}
  @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();
  onSubmit() {
    const toDo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.todoAdd.emit(toDo);
  }
}
