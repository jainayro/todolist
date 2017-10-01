import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ListService } from './../../list.service';
import { Item } from './../../Item';

@Component({
  selector: 'todo-list-input',
  templateUrl: './todo-list-input.component.html',
  styleUrls: ['./todo-list-input.component.scss']
})
export class TodoListInputComponent {
  listItems : string[];
  List : Item[];


  constructor(private listService : ListService){
    this.listItems = [];
    this.List = this.listService.getList();
    console.log("this is the value of the List service", this.List);
  }

  insertItem(item){
    console.log("this is what is in the array:", this.listItems);
    console.log("this is the item being inserted:", item);
    this.listItems.push(item);
    console.log("this is what is in the array:", this.listItems);


  }

}
