import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListService} from './list.service';
import { AppComponent } from './app.component';
import { TodoListBodyComponent } from './todo-list-body/todo-list-body.component';
import { TodoListListComponent } from './todo-list-body/todo-list-list/todo-list-list.component';
import { TodoListInputComponent } from './todo-list-body/todo-list-input/todo-list-input.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodoListBodyComponent,
    TodoListListComponent,
    TodoListInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
