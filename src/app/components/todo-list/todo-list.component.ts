import { Component, input, output, signal } from '@angular/core';
import { Todo } from '../../modals/todo.modal';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todo = input<Todo>();
  todoToggele = output<Todo | undefined>();

  todoClicked() {
    this.todoToggele.emit(this.todo())
  }
}
