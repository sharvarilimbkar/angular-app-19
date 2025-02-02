import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { catchError, single } from 'rxjs';
import { Todo } from '../modals/todo.modal';
import { NgIf } from '@angular/common';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { FilterTodoPipe } from '../pipes/filter-todo.pipe';

@Component({
  selector: 'app-todo',
  imports: [ TodoListComponent, FormsModule, FilterTodoPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit{
 
  searchTerm = signal('');
  toDoService = inject(TodosService);
  toDoItems = signal<Array<Todo>>([])
  
  ngOnInit(): void {
    this.toDoService.getTodos().pipe(catchError((err) => {
      console.log(err);
      throw err;
    })
    ).subscribe(todos => {
      this.toDoItems.set(todos)
    })
  }

  updateTodosCompleted(todoItem: Todo | undefined) {
    this.toDoItems.update(todos => {
      return todos.map(todo => {
        if (todo.id === todoItem?.id) {
          return { ...todo, completed : !todo.completed};
        } else {
          return todo;
        }
      })
    })
  }
}
