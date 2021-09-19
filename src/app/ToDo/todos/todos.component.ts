import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/Models/ToDoModel';
const values: ToDo[] = [];
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: ToDo[];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [
        {
          sno: 1,
          title: 'title1',
          desc: 'desc1',
          active: true,
        },
        {
          sno: 2,
          title: 'title2',
          desc: 'desc2',
          active: true,
        },
        {
          sno: 3,
          title: 'title3',
          desc: 'desc3',
          active: true,
        },
      ];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}
  todoDelete(todo: ToDo) {
    const indx = this.todos.indexOf(todo);
    this.todos.splice(indx, 1);
    //storing into cache
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  todoAdd(todo: ToDo) {
    this.todos.push(todo);
    //storing into cache
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
