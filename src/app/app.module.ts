import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './ToDo/todos/todos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TodoItemComponent } from './ToDo/todo-item/todo-item.component';
import { TodoAddComponent } from './ToDo/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { FooPipe } from './foo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavBarComponent,
    TodoItemComponent,
    TodoAddComponent,
    FooPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
