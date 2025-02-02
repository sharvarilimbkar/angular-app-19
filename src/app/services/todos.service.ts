import { inject, Injectable } from '@angular/core';
import { Todo } from '../modals/todo.modal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService   {

  http = inject(HttpClient)
  // toDoItems: Array<Todo> = [{
  //   id: 0,
  //   userId: 1,
  //   title: 'sharvari',
  //   completed:true,
  // },
  // {
  //   id: 1,
  //   userId: 1,
  //   title: 'vinit',
  //   completed: false
  // }];

  getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos/'
    return this.http.get<Array<Todo>>(url)
  }
}
