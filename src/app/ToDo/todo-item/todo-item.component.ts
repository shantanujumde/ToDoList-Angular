import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/Models/ToDoModel';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClick(todo: ToDo) {
    this.todoDelete.emit(todo);
    console.log('cl :>> ', todo.sno);
  }
}
