import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../modals/todo.modal';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Array<Todo>, searchTerm: string): Todo[] {
    if (!searchTerm) return todos;
    const text = searchTerm.toLocaleLowerCase();
    return todos.filter(todo => todo.title.toLocaleLowerCase().includes(text));
  }

}
